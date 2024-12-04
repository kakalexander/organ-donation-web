import api from './api';

/**
 * Serviço de autenticação.
 */
const authService = {
  // Método de login
  async login(credentials) {
    try {
      const response = await api.post('/login', credentials);
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('tipo_cadastro', user.tipo_cadastro);
      }

      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Erro ao fazer login.';
    }
  },

  // Método de registro
  async register(formData) {
    try {
      const response = await api.post('/register', formData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Erro ao registrar usuário.';
    }
  },
};

// Exportação de métodos individuais
export const login = authService.login.bind(authService);
export const register = authService.register.bind(authService);

// Exportação padrão do serviço
export default authService;
