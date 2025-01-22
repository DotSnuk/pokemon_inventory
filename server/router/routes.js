const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.get('/trainers', controller.allTrainersGet);
router.get('/pokemon', controller.allPokemonGet);
router.get('/pokemonWithType', controller.allPokemonWithTypeGet);
router.get('/trainerPokemonCount/:trainer_id', controller.trainerPokemonCount);

router.post('/addPokemon', controller.addPokemon);

module.exports = router;
