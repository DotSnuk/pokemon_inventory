import axios from 'axios';
// const BACKEND_URL = 'http://localhost:3000';

export async function getTrainers() {
  const response = await axios.get(`/api/trainers`);
  // const response = await fetch('/api').then(res => res.json());
  return response.data;
}

export async function getPokemon(isSorted = true) {
  const response = await axios.get(`/api/pokemon?sorted=${isSorted}`);
  return response.data;
}

export async function getPokemonWithType() {
  const response = await axios.get(`/api/pokemonWithType`);
  return response.data;
}

export async function getPokemonCount(trainer_id) {
  const response = await axios.get(`/api/trainerPokemonCount/${trainer_id}`);
  return response.data;
}

export async function postAddPokemon(data) {
  try {
    const response = await axios.post(`/api/addPokemon`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}
