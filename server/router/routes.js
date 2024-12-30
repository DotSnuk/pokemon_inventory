const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.get('/', controller.allTrainersGet);

module.exports = router;
