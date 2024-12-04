import api from './api';

/**
 * Cria uma nova doação de órgão.
 * @param {Object} organData - Dados do órgão a ser doado.
 * @returns {Promise<Object>} - Retorna os dados do órgão criado.
 */
export const donateOrgan = async (organData) => {
  try {
    const response = await api.post('/orgaos', organData);
    return response.data;
  } catch (error) {
    console.error('Erro ao doar órgão:', error.response || error.message);
    throw error.response?.data?.message || 'Erro ao doar órgão.';
  }
};

/**
 * Busca a lista de órgãos doados por um usuário.
 * @returns {Promise<Array>} - Retorna a lista de órgãos doados.
 */
export const fetchDonatedOrgans = async () => {
  try {
    const response = await api.get('/orgaos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar órgãos doados:', error.response || error.message);
    throw error.response?.data?.message || 'Erro ao buscar órgãos doados.';
  }
};

/**
 * Busca a lista de órgãos disponíveis (pode ser usada para receptores).
 * @returns {Promise<Array>} - Retorna a lista de órgãos disponíveis.
 */
export const fetchOrganList = async () => {
  try {
    const response = await api.get('/orgaos');
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar lista de órgãos:', error.response || error.message);
    throw error.response?.data?.message || 'Erro ao carregar lista de órgãos.';
  }
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

export default {
  donateOrgan,
  fetchDonatedOrgans,
  fetchOrganList,
};
