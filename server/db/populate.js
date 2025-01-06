#! /usr/bin/env node
require('dotenv').config();
const queries = require('./queries');
const pokeapi = require('../api/poke');

async function populateWithPokemon() {
  const pokemons = await pokeapi.getAllPokemon();
  console.log(pokemons);
  pokemons.map(async pokemon => {
    const dataFromApi = await pokeapi.getPokemon(pokemon.name);
    const data = {
      id: dataFromApi.id,
      name: dataFromApi.name,
      orderid: dataFromApi.order,
      img_url: dataFromApi.sprites.other['official-artwork'].front_default,
    };
    queries.insertPokemon(data);
  });
}

// function checking length and comparing to api?

async function comparePokemonsToApi() {
  console.log('Checking database for pokemon');
  const db = await queries.getAllPokemon();
  console.log('Checking external API');
  const api = await pokeapi.getAllPokemon();
  console.log(`Pokemon in DB: ${db.length}. Pokemon in API: ${api.length}`);
  if (db.length < api.length) {
    console.log(`Adding pokemon from API`);
    return populateWithPokemon();
  }
}

comparePokemonsToApi();
