import apiClient from './apiClient';

/**
 * Serviço de autenticação para interagir com a API Laravel.
 */
class AuthService {
  async login(credentials) {
    try {
      const response = await apiClient.post('/login', credentials);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(formData) {
    try {
      const response = await apiClient.post('/register', formData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response && error.response.data) {
      return error.response.data.message || 'Erro desconhecido.';
    }
    return 'Erro de conexão com o servidor.';
  }
}

// Instância do AuthService
const authService = new AuthService();

// Exportação de métodos individuais
export const login = (credentials) => authService.login(credentials);
export const register = (formData) => authService.register(formData);

// Exportação da instância como padrão
export default authService;
