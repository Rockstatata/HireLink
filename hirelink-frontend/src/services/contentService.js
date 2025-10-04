import { apiCall } from "./apiBase";

export const contentService = {
  getJobs,
  getSingleJob,
  getJobLocations,
  getCompanies,
  getSavedJobs,
};
async function getJobs(filters) {
  let params = new URLSearchParams();
  if (filters.search) params.append("search", filters.search);
  if (filters.datePosted) params.append("datePosted", filters.datePosted);
  if (filters.experience && filters.experience !== "") params.append("experience", filters.experience);
  if (filters.salaryRange?.from && filters.salaryRange.from !== "") params.append("minSalary", filters.salaryRange.from);
  if (filters.salaryRange?.to && filters.salaryRange.to !== "") params.append("maxSalary", filters.salaryRange.to);
  if (filters.location) params.append("location", filters.location);
  if (filters.company) params.append("company", filters.company);
  if (filters.jobTypes && filters.jobTypes.length > 0) {
    filters.jobTypes.forEach((jobType) => params.append("jobType", jobType));
  }
  if (filters.workMode && filters.workMode.length > 0) {
    filters.workMode.forEach((workMode) => params.append("workMode", workMode));
  }

  console.log('API call params:', params.toString());
  return apiCall("get", "/jobs/jobs", { params: params });
}

async function getSingleJob(id) {
  return apiCall("get", `/jobs/jobs/${id}`);
}

async function getJobLocations(location) {
  return apiCall("get", "/jobs/job-locations", { params: { search: location } });
}

async function getCompanies() {
  return apiCall("get", "/jobs/companies");
}

async function getSavedJobs() {
  return apiCall("get", "/jobs/saved-jobs");
}
