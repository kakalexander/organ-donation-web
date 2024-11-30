import apiClient from './apiClient';

export const fetchHospitals = () => apiClient.get('/hospitals');
export const fetchHospitalById = (id) => apiClient.get(`/hospitals/${id}`);
export const createHospital = (data) => apiClient.post('/hospitals', data);
export const updateHospital = (id, data) => apiClient.put(`/hospitals/${id}`, data);
export const deleteHospital = (id) => apiClient.delete(`/hospitals/${id}`);