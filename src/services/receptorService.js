import api from './api';

/**
 * Cria uma solicitação de doação.
 * @param {Object} solicitationData - Dados da solicitação.
 * @returns {Promise<Object>} - Solicitação criada.
 */
export const createSolicitation = async (solicitationData) => {
  try {
    const response = await api.post('/receptor/solicitacoes', solicitationData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar solicitação:', error.response || error.message);
    throw error.response?.data?.message || 'Erro ao criar solicitação.';
  }
};

/**
 * Busca a lista de solicitações feitas pelo receptor.
 * @returns {Promise<Array>} - Lista de solicitações.
 */
export const fetchSolicitations = async () => {
  try {
    const response = await api.get('/receptor/solicitacoes');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar solicitações:', error.response || error.message);
    throw error.response?.data?.message || 'Erro ao buscar solicitações.';
  }
};

/**
 * Busca a lista de órgãos disponíveis (genérica).
 * @returns {Promise<Array>} - Lista de órgãos.
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
