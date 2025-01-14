import axios from 'axios';
// const BACKEND_URL = 'http://localhost:3000';

export async function getTrainers() {
  const response = await axios.get(`/api/trainers`);
  // const response = await fetch('/api').then(res => res.json());
  return response.data;
}

export async function getPokemon() {
  const response = await axios.get(`/api/pokemon`);
  return response.data;
}

export async function getPokemonCount(trainer_id) {
  const response = await axios.get(`/api/trainerPokemonCount/${trainer_id}`);
  console.log(response.data);
  return response.data;
}
