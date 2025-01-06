import axios from 'axios';
const BACKEND_URL = 'http://localhost:3000';

export async function getTrainers() {
  const response = await axios.get(`${BACKEND_URL}/`);
  return response.data;
}

export async function getPokemon() {
  const response = await axios.get(`${BACKEND_URL}/pokemon`);
  return response.data;
}
