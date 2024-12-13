import api from './api';

const organService = {
  createOrganForUser: async (data) => {
    try {
      const response = await api.post('/doador/orgaos', data);
      return response.data; // Retorna o órgão criado
    } catch (error) {
      console.error('Erro ao cadastrar órgão:', error.response?.data || error.message);
      throw error;
    }
  },

  fetchOrgansForUser: async () => {
    try {
      const response = await api.get('/doador/orgaos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar órgãos:', error.response?.data || error.message);
      throw error;
    }
  },
};

export default organService;
