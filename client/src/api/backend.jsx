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
  console.log(response.data);
  return response.data;
}

export async function postAddPokemon(data) {
  try {
    await axios.post(`/api/addPokemon`, data);
    console.log('Pokemon added');
    return 'Pokemon added';
  } catch (error) {
    console.log(error.response);
    console.log('Could not add pokemon');
    return 'Could not add pokemon';

    // console.error(error.message);
  }
}
