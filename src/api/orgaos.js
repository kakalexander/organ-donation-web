import apiClient from './apiClient';

export const fetchOrgaos = () => apiClient.get('/orgaos');
export const fetchOrgaoById = (id) => apiClient.get(`/orgaos/${id}`);
export const createOrgao = (data) => apiClient.post('/orgaos', data);
export const updateOrgao = (id, data) => apiClient.put(`/orgaos/${id}`, data);
export const deleteOrgao = (id) => apiClient.delete(`/orgaos/${id}`);

export const fetchOrganStats = () => apiClient.get('/orgaos/stats');