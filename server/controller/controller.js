const db = require('../db/queries');
const pokeapi = require('../api/poke');

async function allTrainersGet(req, res) {
  const trainers = await db.getAllTrainers();
  res.send(trainers);
}

async function allPokemonGet(req, res) {
  const pokemon = await db.getAllPokemon();
  res.send(pokemon);
}

module.exports = {
  allTrainersGet,
  allPokemonGet,
};
