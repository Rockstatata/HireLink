import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const apiCall = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Direct function exports for compatibility with existing imports
export const loginUser = (data) => apiCall.post('/users/login', data);
export const registerUser = (data) => apiCall.post('/users/signup', data);
export const logoutUser = () => apiCall.post('/users/logout');
export const getCurrentUser = () => apiCall.get('/users/current-user');
export const updateUserProfile = (data) => apiCall.put('/users/update-profile', data);

// Enhanced userService object with all methods
export const userService = {
  login,
  signup,
  logout,
  getCurrentUser: getCurrentUser,
  updateProfilePicture,
  updateUserProfile: updateUserProfile,
  addSkill,
  removeSkill,
  updateResume,
  saveJob,
  applyForJob,
  removeSavedJob,
  getPublicProfile,
  getSavedJobs,
  getMyApplications,
};

async function login(userData) {
  const response = await apiCall.post("/users/login", userData);
  return response.data;
}

async function signup(userData) {
  const response = await apiCall.post("/users/signup", userData);
  return response.data;
}

async function updateProfilePicture(file) {
  const formPayload = new FormData();
  formPayload.append("profilePicture", file);
  const response = await apiCall.post("/users/profile-picture", formPayload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

async function logout() {
  const response = await apiCall.post("/users/logout");
  return response.data;
}

async function addSkill(skill) {
  const response = await apiCall.post("/users/add-skill", { skill });
  return response.data;
}

async function removeSkill(skill) {
  const response = await apiCall.delete("/users/remove-skill", { data: { skill } });
  return response.data;
}

async function updateResume(resume) {
  const response = await apiCall.post("/users/resume", { resume });
  return response.data;
}

async function saveJob(id) {
  const response = await apiCall.post(`/jobs/save/${id}`, {});
  return response.data;
}

async function applyForJob(id) {
  const response = await apiCall.post(`/jobs/apply/${id}`, {});
  return response.data;
}

async function removeSavedJob(jobId) {
  const response = await apiCall.post(`/jobs/remove-saved-job/${jobId}`);
  return response.data;
}

async function getPublicProfile(id) {
  const response = await apiCall.get(`/users/public-profile/${id}`);
  return response.data;
}

async function getSavedJobs() {
  const response = await apiCall.get("/users/saved-jobs");
  return response.data;
}

async function getMyApplications() {
  const response = await apiCall.get("/users/my-applications");
  return response.data;
}
