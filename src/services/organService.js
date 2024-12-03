import api from './api';

export const fetchOrganList = async () => {
  const response = await api.get('/orgaos'); 
  return response.data;
};

export const createOrgan = async (organData) => {
  const response = await api.post('/orgaos', organData);
  return response.data;
};
