import api from './api';

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData); // Endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};
