import api from './api';

export const fetchOrganList = async () => {
  const response = await api.get('/orgaos'); 
  return response.data;
};

export const createOrgan = async (organData) => {
  try {
    const response = await api.post('/orgaos', organData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar órgão:', error);
    throw error;
  }
};
