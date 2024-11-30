export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  
  export const getUserProfile = () => {
    return localStorage.getItem('user_profile');
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_profile');
    window.location.href = '/login';
  };
  