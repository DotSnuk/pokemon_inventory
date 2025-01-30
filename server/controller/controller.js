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
    return res
      .status(200)
      .send({ success: true, message: 'Pokemon added to Trainer' });
  } catch (error) {
    next(error);
  }
}

async function trainerPokemon(req, res) {
  const pokemon = await db.getTrainerPokemon(req.params.trainer_id);
  res.send(pokemon);
}

async function trainerPokemonId(req, res) {
  const pokemon = await db.getTrainerPokemonId(req.params.pokemon_id);
  res.send(pokemon);
}

module.exports = {
  allTrainersGet,
  allPokemonGet,
  allPokemonWithTypeGet,
  trainerPokemonCount,
  addPokemon,
  trainerPokemon,
  trainerPokemonId,
};
