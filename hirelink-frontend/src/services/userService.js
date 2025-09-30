// filepath: d:\CODE\HireLink\hirelink-frontend\src\services\userService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const apiCall = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const loginUser = (data) => apiCall.post('/users/login', data);
export const registerUser = (data) => apiCall.post('/users/signup', data);
export const logoutUser = () => apiCall.post('/users/logout');
export const getCurrentUser = () => apiCall.get('/users/current-user');
export const updateUserProfile = (data) => apiCall.put('/users/update-profile', data);