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

export async function getTrainerPokemon(trainer_id) {
  const response = await axios.get(`/api/trainerPokemon/${trainer_id}`);
  console.log(response);
  return response.data;
}

export async function getPokemonWithTrainer(pokemon_id, trainer_id) {
  const response = await axios.get(
    `/api/pokemonWithTrainer/${pokemon_id}/${trainer_id}`,
  );
  console.log(response.data);
  return response.data;
}

export async function getTrainerPokemonId(pokemonid) {
  const response = await axios.get(`/api/trainerPokemonId/${pokemonid}`);
  return response.data[0];
}

export async function postAddPokemon(data) {
  try {
    const response = await axios.post(`/api/addPokemon`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function postUpdatePokemon(data) {
  try {
    const response = await axios.post(`/api/updatePokemon`, data);
    console.log(response);
    return response;
  } catch (error) {
    return error.response;
  }
}
