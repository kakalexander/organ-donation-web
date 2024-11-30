import apiClient from './apiClient';

export const fetchUsers = () => apiClient.get('/usuarios');
export const fetchUserStats = () => apiClient.get('/usuarios/stats');
