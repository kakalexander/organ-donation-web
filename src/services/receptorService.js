import api from './api';

const receptorService = {
  fetchSolicitations: async () => {
    try {
      const response = await api.get('/receptor/solicitations');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar solicitações:', error.response?.data || error.message);
      throw error;
    }
  },

  createSolicitation: async (data) => {
    try {
      const response = await api.post('/receptor/solicitations', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar solicitação:', error.response?.data || error.message);
      throw error;
    }
  },
};

export default receptorService;
