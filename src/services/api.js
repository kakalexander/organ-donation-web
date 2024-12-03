import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token automaticamente a cada requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na API:', error.response || error.message);
    return Promise.reject(error);
  }
);

// Busca os detalhes do usuário autenticado
export const fetchUserDetails = async () => {
  const response = await api.get('/user');
  return response.data;
};

// Busca os dados do dashboard
export const fetchDashboardData = async () => {
  return await api.get('/dashboard');
};

export default api;
