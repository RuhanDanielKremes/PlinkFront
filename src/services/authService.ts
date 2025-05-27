import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/system'; // ajuste se necessário

export const login = async (email: string, senha: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth`, {
    email,
    senha,
  });
  return response.data;
};
