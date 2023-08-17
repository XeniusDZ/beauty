import axios from 'axios';
import { useJwt } from "react-jwt";



export const login = async (login_id, password) => {
  try {
    const response = await axios.post('/api/login', { login_id, password });

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);

  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};


export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post(`/api/refresh`, { refresh_token: refreshToken });
    const accessToken = response.data.access_token;
    localStorage.setItem("access_token", accessToken);
    return accessToken;
  } catch (error) {
    logout();
  }
};



