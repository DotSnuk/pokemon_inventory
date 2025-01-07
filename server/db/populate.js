#! /usr/bin/env node
require('dotenv').config();
const queries = require('./queries');
const pokeapi = require('../api/poke');
const utility = require('../utility/utilities');

async function populateWithPokemon(pokemons) {
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

async function populateWithTypes(types) {
  types.map(async type => {
    const dataFromApi = await pokeapi.getType(type.name);
    const data = { id: dataFromApi.id, name: dataFromApi.name };
    queries.insertType(data);
  });
}

async function populateWithMoves(moves) {
  moves.map(async move => {
    const dataFromApi = await pokeapi.getMove(move.name);
    const type_id = parseInt(utility.getLastPartOfURL(dataFromApi.type.url));
    // id, name, accuracy, effect, power, pp, priority, type_id
    const effect =
      dataFromApi.effect_entries.length > 0
        ? dataFromApi.effect_entries[0].short_effect
        : '';
    const data = {
      id: dataFromApi.id,
      name: dataFromApi.name,
      accuracy: dataFromApi.accuracy,
      effect: effect,
      power: dataFromApi.power,
      pp: dataFromApi.pp,
      priority: dataFromApi.priority,
      type_id: type_id,
    };
    queries.insertMove(data);
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
    return populateWithPokemon(api);
  }
}

async function compareTypesToApi() {
  console.log('Checking database for types');
  const db = await queries.getAllTypes();
  console.log('Checking external API');
  const api = await pokeapi.getAllTypes();
  console.log(`Types in DB: ${db.length}. Types in API: ${api.length}`);
  if (db.length < api.length) {
    console.log('Adding types to DB');
    populateWithTypes(api);
  }
}

async function compareMovesToApi() {
  console.log('Checking database for moves');
  const db = await queries.getAllMoves();
  console.log('Checking external API');
  const api = await pokeapi.getAllMoves();
  console.log(`Moves in DB: ${db.length}. Moves in API: ${api.length}`);
  if (db.length < api.length) {
    console.log('Adding moves to DB');
    populateWithMoves(api);
  }
}

comparePokemonsToApi();
compareTypesToApi();
compareMovesToApi();
