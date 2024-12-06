import api from './api';

export const createUser = async (userData) => {
  try {
    const response = await api.post('/admin/users', userData); // Atualizado para a rota correta
    return response.data;
  } 
  catch (error) {
    console.error('Erro ao cadastrar usuário:', error.response?.data || error.message);
  }
};
