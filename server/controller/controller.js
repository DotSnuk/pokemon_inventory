const db = require('../db/queries');
// const pokeapi = require('../api/poke');

async function allTrainersGet(req, res) {
  const trainers = await db.getAllTrainers();
  res.send(trainers);
}

async function allPokemonGet(req, res) {
  const pokemon = await db.getAllPokemon();
  res.send(pokemon);
}

async function trainerPokemonCount(req, res) {
  console.log(req.params.trainer_id);
  const count = await db.getCountPokemonTrainer(req.params.trainer_id);
  res.send(count);
}

module.exports = {
  allTrainersGet,
  allPokemonGet,
  trainerPokemonCount,
};
