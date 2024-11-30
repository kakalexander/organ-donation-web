import axios from 'axios';
/**
 * Configuração global para chamadas à API Laravel.
 */
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost/api/', // Fallback caso REACT_APP_API_URL não esteja definido
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Interceptor de requisição.
 * Adiciona o token de autenticação (Bearer) se presente no localStorage.
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Interceptor de resposta.
 * Pode ser usado para tratamento global de erros ou logging.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na API:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
