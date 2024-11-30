import apiClient from './apiClient';

export const fetchSolicitations = () => apiClient.get('/solicitations');
export const fetchSolicitationById = (id) => apiClient.get(`/solicitations/${id}`);
export const createSolicitation = (data) => apiClient.post('/solicitations', data);
export const deleteSolicitation = (id) => apiClient.delete(`/solicitations/${id}`);
