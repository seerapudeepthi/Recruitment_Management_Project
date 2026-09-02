import axios from 'axios';

const API = axios.create({
  baseURL: 'https://recruitment-management-az71.onrender.com'
});

export const getCandidates = () => API.get('/candidates');
export const getCandidateById = (id) => API.get(`/candidates/${id}`);
export const createCandidate = (data) => API.post('/candidates', data);
export const updateCandidate = (id, data) => API.put(`/candidates/${id}`, data);
export const patchCandidate = (id, data) => API.patch(`/candidates/${id}`, data);
export const deleteCandidate = (id) => API.delete(`/candidates/${id}`);

export const getUsers = () => API.get('/users');
export const registerUser = (userData) => API.post('/users', userData);

export default API;