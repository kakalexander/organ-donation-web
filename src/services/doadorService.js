import api from './api';

const doadorService = {
  fetchOrgans: async () => {
    const response = await api.get('/doador/orgaos');
    return response.data;
  },

  donateOrgan: async (data) => {
    const response = await api.post('/doador/orgaos', data);
    return response.data;
  },
};

export default doadorService;
