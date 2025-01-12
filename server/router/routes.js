const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.get('/trainers', controller.allTrainersGet);
router.get('/pokemon', controller.allPokemonGet);

module.exports = router;
