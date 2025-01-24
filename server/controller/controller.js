const db = require('../db/queries');
// const pokeapi = require('../api/poke');

async function allTrainersGet(req, res) {
  const trainers = await db.getAllTrainers();
  res.send(trainers);
}

async function allPokemonGet(req, res) {
  const { sorted } = req.query;
  const pokemon = await db.getAllPokemon(sorted);
  res.send(pokemon);
}

async function allPokemonWithTypeGet(req, res) {
  const pokemon = await db.getAllPokemonWithType();
  res.send(pokemon);
}

async function trainerPokemonCount(req, res) {
  console.log(req.params.trainer_id);
  const count = await db.getCountPokemonTrainer(req.params.trainer_id);
  res.send(count);
}

async function addPokemon(req, res, next) {
  try {
    await db.addPokemonTrainer(req.body);
    return res.status(200).send('success');
  } catch (error) {
    next(error);
  }
}

module.exports = {
  allTrainersGet,
  allPokemonGet,
  allPokemonWithTypeGet,
  trainerPokemonCount,
  addPokemon,
};
