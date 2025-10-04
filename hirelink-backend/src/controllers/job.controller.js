import { Job } from "../models/job.model.js";
import { CompanyProfile } from "../models/companyProfile.model.js";
import { User } from "../models/user.model.js";
import { JobSeekerProfile } from "../models/jobSeekerProfile.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateJobDescription } from "../utils/openAi.service.js";
import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

// Testing endpoints
const ping = (req, res) => {
  res.send({ msg: "API is healthy!" });
};

const authPing = (req, res) => {
  res.send("Job Auth is working");
};

// Create a new job posting
const createJob = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const jobData = req.body;

  console.log('Creating job for userId:', userId);
  console.log('Job data:', JSON.stringify(jobData, null, 2));

  // Get the user and verify they are an employer
  const user = await User.findById(userId);
  if (!user || user.role !== "employer") {
    throw new ApiError(403, "Only employers can create job postings");
  }

  // Get the company profile
  const companyProfile = await CompanyProfile.findById(user.companyProfile);
  if (!companyProfile) {
    throw new ApiError(404, "Company profile not found. Please complete your company onboarding first.");
  }

  // Process and clean the job data
  const processedJobData = {
    ...jobData,
    // Generate shortDescription from description if not provided
    shortDescription: jobData.shortDescription || 
      (jobData.description ? 
        DOMPurify.sanitize(jobData.description.replace(/<[^>]*>/g, '').substring(0, 200)) : 
        'No description available'),
    
    // Set default category if empty
    category: jobData.category || 'other',
    
    // Ensure additionalRequirements is an array
    additionalRequirements: Array.isArray(jobData.additionalRequirements) 
      ? jobData.additionalRequirements 
      : (jobData.additionalRequirements ? [jobData.additionalRequirements] : []),
    
    // Parse applicationDeadline properly
    applicationDeadline: jobData.applicationDeadline ? 
      (function() {
        try {
          // If it's just a day like "5 October", assume current year
          const dateStr = jobData.applicationDeadline;
          if (typeof dateStr === 'string' && !dateStr.includes(',') && !dateStr.includes('/') && !dateStr.includes('-')) {
            // Format like "5 October" - add current year
            const currentYear = new Date().getFullYear();
            return new Date(`${dateStr} ${currentYear}`);
          }
          return new Date(dateStr);
        } catch (error) {
          console.warn('Invalid date format, using default:', jobData.applicationDeadline);
          return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
        }
      })() :
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Default to 30 days from now
    
    // Ensure salary has all required fields
    salary: {
      min: Number(jobData.salary?.min) || 0,
      max: Number(jobData.salary?.max) || 0,
      currency: jobData.salary?.currency || 'USD',
      negotiable: Boolean(jobData.salary?.negotiable) || false,
    },
    
    // Set company and user references
    company: companyProfile._id,
    postedBy: userId,
  };

  // Remove any undefined, empty string fields, or empty keys that might cause issues
  Object.keys(processedJobData).forEach(key => {
    if (key === '' || processedJobData[key] === '' || processedJobData[key] === undefined || processedJobData[key] === null) {
      delete processedJobData[key];
    }
  });

  console.log('Processed job data:', JSON.stringify(processedJobData, null, 2));

  // Create job with processed data
  const job = await Job.create(processedJobData);

  // Populate the job with company details
  const populatedJob = await Job.findById(job._id)
    .populate('company', 'companyName companyLogo industry companyWebsite')
    .populate('postedBy', 'name email');

  return res.status(201).json(
    new ApiResponse(201, { job: populatedJob }, "Job created successfully")
  );
});

// Get all jobs with filtering and pagination
const getJobs = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search,
    location,
    jobType,
    workMode,
    category,
    company,
    minSalary,
    maxSalary,
    experience,
    datePosted,
  } = req.query;

  const filter = { isActive: true };

  // Build search filters
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { skills: { $in: [new RegExp(search, 'i')] } },
    ];
  }

  if (location) {
    filter.location = { $regex: location, $options: 'i' };
  }

  if (jobType) {
    filter.jobType = jobType;
  }

  if (workMode) {
    filter.workMode = workMode;
  }

  if (category) {
    filter.category = category;
  }

  if (company) {
    filter.company = company;
  }

  if (minSalary || maxSalary) {
    const salaryFilter = {};
    if (minSalary && !isNaN(parseInt(minSalary))) {
      salaryFilter['salary.min'] = { $gte: parseInt(minSalary) };
    }
    if (maxSalary && !isNaN(parseInt(maxSalary))) {
      salaryFilter['salary.max'] = { $lte: parseInt(maxSalary) };
    }
    // Only add to filter if we have valid salary constraints
    Object.assign(filter, salaryFilter);
  }

  if (experience && !isNaN(parseInt(experience))) {
    filter['experience.min'] = { $lte: parseInt(experience) };
    filter['experience.max'] = { $gte: parseInt(experience) };
  }

  // Date posted filter
  if (datePosted) {
    const today = new Date();
    if (datePosted === "today") {
      filter.createdAt = { $gte: new Date(today.setHours(0, 0, 0, 0)) };
    } else if (datePosted === "yesterday") {
      filter.createdAt = {
        $gte: new Date(today.setDate(today.getDate() - 1)),
        $lt: new Date(today.setHours(0, 0, 0, 0)),
      };
    } else if (datePosted === "this_week") {
      filter.createdAt = {
        $gte: new Date(today.setDate(today.getDate() - 7)),
      };
    } else if (datePosted === "this_month") {
      filter.createdAt = {
        $gte: new Date(today.setMonth(today.getMonth() - 1)),
      };
    }
  }

  // Pagination
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const startIndex = (pageNumber - 1) * limitNumber;
  
  console.log('Job query filter:', JSON.stringify(filter, null, 2));
  
  const total = await Job.countDocuments(filter);
  console.log('Total jobs found:', total);

  const jobs = await Job.find(filter)
    .populate('company', 'companyName companyLogo industry companyWebsite address')
    .populate('postedBy', 'name email')
    .sort({ createdAt: -1 })
    .skip(startIndex)
    .limit(limitNumber)
    .select('-applicants');

  console.log('Jobs retrieved:', jobs.length);
  console.log('Sample job:', jobs[0] ? {
    id: jobs[0]._id,
    title: jobs[0].title,
    company: jobs[0].company,
    isActive: jobs[0].isActive
  } : 'No jobs found');

  // Pagination result
  const pagination = {
    current: pageNumber,
    total: Math.ceil(total / limitNumber),
    hasNext: startIndex + limitNumber < total,
    hasPrev: pageNumber > 1,
    totalJobs: total,
  };

  return res.status(200).json(
    new ApiResponse(200, { jobs, pagination }, "Jobs fetched successfully")
  );
});

const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let job = await Job.findById(id)
    .populate('company', 'companyName companyLogo industry companyWebsite address companyDescription')
    .populate('postedBy', 'name email');

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  // Sanitize the job description
  if (job.description) {
    job.description = DOMPurify.sanitize(job.description);
  }

  // Increment view count
  await Job.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });

  // Convert to object and add application count
  job = job.toObject();
  job.numberOfApplicants = job.applicants ? job.applicants.length : 0;

  // Remove applicant details for privacy
  delete job.applicants;

  return res.status(200).json(
    new ApiResponse(200, job, "Job fetched successfully")
  );
});

// Get jobs posted by the current employer
const getMyJobs = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { page = 1, limit = 10, status = 'all' } = req.query;

  const user = await User.findById(userId);
  if (!user || user.role !== "employer") {
    throw new ApiError(403, "Only employers can access this endpoint");
  }

  const filter = { postedBy: userId };
  
  if (status !== 'all') {
    filter.isActive = status === 'active';
  }

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const startIndex = (pageNumber - 1) * limitNumber;
  const total = await Job.countDocuments(filter);

  const jobs = await Job.find(filter)
    .populate('company', 'companyName companyLogo')
    .sort({ createdAt: -1 })
    .skip(startIndex)
    .limit(limitNumber);

  const pagination = {
    current: pageNumber,
    total: Math.ceil(total / limitNumber),
    hasNext: startIndex + limitNumber < total,
    hasPrev: pageNumber > 1,
  };

  return res.status(200).json(
    new ApiResponse(200, { jobs, pagination }, "Your jobs fetched successfully")
  );
});

// Legacy method name for compatibility
const postJob = createJob;

const sendJobDescription = asyncHandler(async (req, res) => {
  const { role, _id } = req.user;
  const jobDetails = req.body;

  if (role !== "employer") {
    throw new ApiError(
      403,
      "Unauthorized action. Only users with an 'employer' role are permitted to generate job descriptions."
    );
  }

  const user = await User.findById(_id);
  const companyProfile = await CompanyProfile.findById(user.companyProfile);
  
  if (!companyProfile) {
    throw new ApiError(404, "Company profile not found");
  }

  if (companyProfile.aiUseLimit < 1) {
    throw new ApiError(
      429,
      "Quota exceeded. The user has reached the limit for free job description generations. An upgrade to the plan is required to continue using this feature."
    );
  }

  const response = await generateJobDescription(jobDetails);

  if (response) {
    companyProfile.aiUseLimit -= 1;
    await companyProfile.save();
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, response, "Job description generated successfully")
    );
});

const applyForJob = asyncHandler(async (req, res) => {
  const { role, _id } = req.user;
  const jobId = req.params.id;
  const { coverLetter } = req.body;

  if (role !== "jobSeeker") {
    throw new ApiError(403, "Only job seekers can apply for jobs");
  }

  const job = await Job.findById(jobId);
  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (!job.isActive) {
    throw new ApiError(400, "This job is no longer accepting applications");
  }

  // Check if user already applied
  const hasApplied = job.applicants.some(applicant => 
    applicant.user.toString() === _id.toString()
  );

  if (hasApplied) {
    throw new ApiError(400, "You have already applied for this job");
  }

  // Add application
  job.applicants.push({
    user: _id,
    coverLetter: coverLetter || "",
  });

  job.applicationCount += 1;
  await job.save();

  return res.status(200).json(
    new ApiResponse(200, {}, "Job applied successfully")
  );
});

const saveJob = asyncHandler(async (req, res) => {
  const { role, _id } = req.user;
  const jobId = req.params.id;
  
  if (role !== "jobSeeker") {
    throw new ApiError(403, "Only job seekers can save jobs");
  }

  const user = await User.findById(_id);
  const jobSeekerProfile = await JobSeekerProfile.findById(user.jobSeekerProfile);
  
  if (!jobSeekerProfile) {
    throw new ApiError(404, "Job seeker profile not found");
  }

  if (jobSeekerProfile.savedJobs.includes(jobId)) {
    throw new ApiError(400, "Job is already saved");
  }

  jobSeekerProfile.savedJobs.push(jobId);
  await jobSeekerProfile.save();

  return res.status(200).json(
    new ApiResponse(200, {}, "Job saved successfully")
  );
});

const getSavedJobs = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  const jobSeekerProfile = await JobSeekerProfile.findById(user.jobSeekerProfile)
    .populate({
      path: 'savedJobs',
      populate: {
        path: 'company',
        select: 'companyName companyLogo industry'
      }
    });

  if (!jobSeekerProfile) {
    throw new ApiError(404, "Job seeker profile not found");
  }

  return res.status(200).json(
    new ApiResponse(200, jobSeekerProfile.savedJobs, "Saved jobs fetched successfully")
  );
});

const removeSavedJob = asyncHandler(async (req, res) => {
  const { role, _id } = req.user;
  const jobId = req.params.id;

  if (role !== "jobSeeker") {
    throw new ApiError(403, "Only job seekers can remove saved jobs");
  }

  const user = await User.findById(_id);
  const jobSeekerProfile = await JobSeekerProfile.findById(user.jobSeekerProfile);
  
  if (!jobSeekerProfile) {
    throw new ApiError(404, "Job seeker profile not found");
  }

  const index = jobSeekerProfile.savedJobs.indexOf(jobId);
  if (index === -1) {
    throw new ApiError(400, "Job is not saved");
  }

  jobSeekerProfile.savedJobs.splice(index, 1);
  await jobSeekerProfile.save();

  return res.status(200).json(
    new ApiResponse(200, {}, "Successfully removed job from saved jobs list")
  );
});

const getJobLocations = asyncHandler(async (req, res) => {
  let filter = { isActive: true };

  if (req.query.search) {
    filter.location = { $regex: req.query.search, $options: "i" };
  }

  let locations = await Job.distinct("location", filter);

  if (!locations.length) {
    return res.status(200).json(
      new ApiResponse(200, [], "No job locations found")
    );
  }

  if (locations.length > 5) {
    locations = locations.slice(0, 5);
  }

  return res.status(200).json(
    new ApiResponse(200, locations, "Job locations fetched successfully")
  );
});

const getCompanies = asyncHandler(async (req, res) => {
  const companies = await CompanyProfile.find({
    doneOnboarding: true,
  }).select("companyName companyLogo industry companyWebsite companySize companySocialProfiles address");

  // Get job count for each company and convert to plain objects
  const companiesWithJobCount = await Promise.all(
    companies.map(async (company) => {
      const jobCount = await Job.countDocuments({ 
        company: company._id, 
        isActive: true 
      });
      const companyObject = company.toObject();
      companyObject.jobCount = jobCount;
      return companyObject;
    })
  );

  return res.status(200).json(
    new ApiResponse(200, companiesWithJobCount, "Companies fetched successfully")
  );
});

// Get applications for a specific job (for employers)
const getJobApplications = asyncHandler(async (req, res) => {
  const { id: jobId } = req.params;
  const userId = req.user._id;
  const { page = 1, limit = 10, status = 'all' } = req.query;

  const job = await Job.findById(jobId);
  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  // Check if the user is the owner of this job
  if (job.postedBy.toString() !== userId.toString()) {
    throw new ApiError(403, "You can only view applications for your own job postings");
  }

  let applicants = job.applicants;
  
  if (status !== 'all') {
    applicants = applicants.filter(app => app.status === status);
  }

  // Paginate applicants
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = pageNumber * limitNumber;

  // Populate user details for paginated applicants
  const populatedJob = await Job.findById(jobId)
    .populate({
      path: 'applicants.user',
      select: 'name email',
      populate: {
        path: 'jobSeekerProfile',
        select: 'primaryRole yearsOfExperience skills location',
      },
    });

  const result = {
    docs: populatedJob.applicants.slice(startIndex, endIndex),
    totalDocs: applicants.length,
    limit: limitNumber,
    page: pageNumber,
    totalPages: Math.ceil(applicants.length / limitNumber),
    hasNextPage: endIndex < applicants.length,
    hasPrevPage: pageNumber > 1,
  };

  return res.status(200).json(
    new ApiResponse(200, result, "Job applications fetched successfully")
  );
});

// Get user's job applications (for job seekers)
const getMyApplications = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { page = 1, limit = 10, status = 'all' } = req.query;

  const user = await User.findById(userId);
  if (!user || user.role !== "jobSeeker") {
    throw new ApiError(403, "Only job seekers can access this endpoint");
  }

  const filter = { 'applicants.user': userId };
  
  if (status !== 'all') {
    filter['applicants.status'] = status;
  }

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const startIndex = (pageNumber - 1) * limitNumber;
  const total = await Job.countDocuments(filter);

  const jobs = await Job.find(filter)
    .populate('company', 'companyName companyLogo industry')
    .sort({ 'applicants.appliedAt': -1 })
    .skip(startIndex)
    .limit(limitNumber);

  // Filter applicants to only show current user's applications
  const result = {
    docs: jobs.map(job => ({
      ...job.toObject(),
      myApplication: job.applicants.find(app => 
        app.user.toString() === userId.toString()
      ),
      applicants: undefined, // Remove all applicants for privacy
    })),
    totalDocs: total,
    limit: limitNumber,
    page: pageNumber,
    totalPages: Math.ceil(total / limitNumber),
    hasNextPage: startIndex + limitNumber < total,
    hasPrevPage: pageNumber > 1,
  };

  return res.status(200).json(
    new ApiResponse(200, result, "Your applications fetched successfully")
  );
});

// Get all applications for company's jobs (for employers)
const getMyCompanyApplications = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { page = 1, limit = 10, status = 'all' } = req.query;

  const user = await User.findById(userId);
  if (!user || user.role !== "employer") {
    throw new ApiError(403, "Only employers can access this endpoint");
  }

  // Find all jobs posted by this company
  const companyJobs = await Job.find({ postedBy: userId }).select('_id title');
  const jobIds = companyJobs.map(job => job._id);

  if (jobIds.length === 0) {
    return res.status(200).json(
      new ApiResponse(200, { applications: [], pagination: { current: 1, total: 0, hasNext: false, hasPrev: false } }, "No applications found")
    );
  }

  // Build filter for applications
  const filter = { _id: { $in: jobIds }, 'applicants.0': { $exists: true } };
  
  if (status !== 'all') {
    filter['applicants.status'] = status;
  }

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const startIndex = (pageNumber - 1) * limitNumber;

  // Get jobs with applications
  const jobsWithApplications = await Job.find(filter)
    .populate('applicants.user', 'name email userProfile')
    .sort({ 'applicants.appliedAt': -1 })
    .skip(startIndex)
    .limit(limitNumber);

  // Flatten applications with job info
  let allApplications = [];
  jobsWithApplications.forEach(job => {
    job.applicants.forEach(application => {
      if (status === 'all' || application.status === status) {
        allApplications.push({
          _id: application._id,
          job: {
            _id: job._id,
            title: job.title,
            company: job.company
          },
          user: application.user,
          status: application.status,
          appliedAt: application.appliedAt,
          coverLetter: application.coverLetter,
          resume: application.resume
        });
      }
    });
  });

  // Sort by application date
  allApplications.sort((a, b) => new Date(b.appliedAt) - new Date(a.appliedAt));

  const total = allApplications.length;
  const pagination = {
    current: pageNumber,
    total: Math.ceil(total / limitNumber),
    hasNext: startIndex + limitNumber < total,
    hasPrev: pageNumber > 1,
  };

  return res.status(200).json(
    new ApiResponse(200, { applications: allApplications, pagination }, "Company applications fetched successfully")
  );
});

export {
  ping,
  authPing,
  createJob,
  getJobs,
  getJobById,
  getMyJobs,
  postJob,
  sendJobDescription,
  applyForJob,
  saveJob,
  getSavedJobs,
  removeSavedJob,
  getJobLocations,
  getCompanies,
  getJobApplications,
  getMyApplications,
  getMyCompanyApplications,
};
