import axios from 'axios';
// const BACKEND_URL = 'http://localhost:3000';

export async function getTrainers() {
  const response = await axios.get(`/api`);
  // const response = await fetch('/api').then(res => res.json());
  return response.data;
}

export async function getPokemon() {
  const response = await axios.get(`/api/pokemon`);
  return response.data;
}
