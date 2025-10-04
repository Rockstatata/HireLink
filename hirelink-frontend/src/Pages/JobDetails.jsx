import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { contentService } from '../services/contentService';
import { companyService } from '../services/companyService';
import Dialogbox from '../components/Dialogbox';

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [saving, setSaving] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [dialog, setDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    buttonText: '',
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await contentService.getSingleJob(id);
        if (response) {
          setJob(response);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setDialog({
          isOpen: true,
          title: 'Error',
          message: 'Failed to load job details',
          buttonText: 'OK',
          onClose: () => navigate('/jobs')
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id, navigate]);

  const handleApplyForJob = async () => {
    if (!userData) {
      setDialog({
        isOpen: true,
        title: 'Login Required',
        message: 'Please login to apply for jobs',
        buttonText: 'Login',
        onClose: () => navigate('/login')
      });
      return;
    }

    if (userData.role !== 'jobSeeker') {
      setDialog({
        isOpen: true,
        title: 'Access Denied',
        message: 'Only job seekers can apply for jobs',
        buttonText: 'OK'
      });
      return;
    }

    setApplying(true);
    try {
      await companyService.applyForJob(id, { coverLetter });
      setDialog({
        isOpen: true,
        title: 'Application Successful',
        message: 'Your application has been submitted successfully!',
        buttonText: 'Great!',
        onClose: () => {
          setShowApplicationForm(false);
          setCoverLetter('');
        }
      });
    } catch (error) {
      console.error('Error applying for job:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to apply for job';
      setDialog({
        isOpen: true,
        title: 'Application Failed',
        message: errorMessage,
        buttonText: 'OK'
      });
    } finally {
      setApplying(false);
    }
  };

  const handleSaveJob = async () => {
    if (!userData) {
      setDialog({
        isOpen: true,
        title: 'Login Required',
        message: 'Please login to save jobs',
        buttonText: 'Login',
        onClose: () => navigate('/login')
      });
      return;
    }

    setSaving(true);
    try {
      await companyService.saveJob(id);
      setDialog({
        isOpen: true,
        title: 'Job Saved',
        message: 'Job has been saved to your profile!',
        buttonText: 'OK'
      });
    } catch (error) {
      console.error('Error saving job:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to save job';
      setDialog({
        isOpen: true,
        title: 'Save Failed',
        message: errorMessage,
        buttonText: 'OK'
      });
    } finally {
      setSaving(false);
    }
  };

  const formatSalary = (salary) => {
    if (!salary) return 'Not specified';
    const { min, max, currency = 'USD', negotiable } = salary;
    if (negotiable) return 'Negotiable';
    if (min && max) return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
    if (min) return `${currency} ${min.toLocaleString()}+`;
    return 'Not specified';
  };

  const formatExperience = (experience) => {
    if (!experience) return 'Not specified';
    const { min, max } = experience;
    if (min === max) return `${min} year${min !== 1 ? 's' : ''}`;
    return `${min}-${max} years`;
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const posted = new Date(date);
    const diffTime = Math.abs(now - posted);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading job details...</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-gray-600">Job not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <button
              onClick={() => navigate('/jobs')}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Jobs
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleSaveJob}
                disabled={saving}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2"
              >
                <i className="far fa-bookmark"></i>
                {saving ? 'Saving...' : 'Save Job'}
              </button>
              <button
                onClick={() => setShowApplicationForm(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex items-start gap-4">
            {job.company?.companyLogo && (
              <img
                src={job.company.companyLogo}
                alt={job.company.companyName}
                className="w-16 h-16 rounded-lg object-cover border"
              />
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <i className="fas fa-building"></i>
                  {job.company?.companyName}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-map-marker-alt"></i>
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-clock"></i>
                  {getTimeAgo(job.createdAt)}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-users"></i>
                  {job.numberOfApplicants || 0} applicants
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {job.jobType?.charAt(0).toUpperCase() + job.jobType?.slice(1)}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {job.workMode?.charAt(0).toUpperCase() + job.workMode?.slice(1)}
            </span>
            {job.category && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {job.category}
              </span>
            )}
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-700">{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc list-inside space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="text-gray-700">{requirement}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
                <ul className="list-disc list-inside space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Job Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-500 text-sm">Salary</span>
                  <p className="font-medium">{formatSalary(job.salary)}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Experience</span>
                  <p className="font-medium">{formatExperience(job.experience)}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Job Type</span>
                  <p className="font-medium">{job.jobType}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Work Mode</span>
                  <p className="font-medium">{job.workMode}</p>
                </div>
                {job.applicationDeadline && (
                  <div>
                    <span className="text-gray-500 text-sm">Application Deadline</span>
                    <p className="font-medium">
                      {new Date(job.applicationDeadline).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Company Info */}
            {job.company && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">About Company</h3>
                <div className="flex items-center gap-3 mb-3">
                  {job.company.companyLogo && (
                    <img
                      src={job.company.companyLogo}
                      alt={job.company.companyName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-medium">{job.company.companyName}</h4>
                    {job.company.industry && (
                      <p className="text-gray-500 text-sm">{job.company.industry}</p>
                    )}
                  </div>
                </div>
                {job.company.companyDescription && (
                  <p className="text-gray-700 text-sm">{job.company.companyDescription}</p>
                )}
                {job.company.companyWebsite && (
                  <a
                    href={job.company.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                  >
                    Visit Company Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold mb-4">Apply for {job.title}</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell the employer why you're interested in this position..."
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleApplyForJob}
                  disabled={applying}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {applying ? 'Submitting...' : 'Submit Application'}
                </button>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <Dialogbox
          isOpen={dialog.isOpen}
          setIsOpen={(isOpen) => setDialog({ ...dialog, isOpen })}
          title={dialog.title}
          message={dialog.message}
          buttonText={dialog.buttonText}
          onClose={dialog.onClose}
        />
      </div>
    </div>
  );
}

export default JobDetails;