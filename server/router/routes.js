const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('text that says hello'));

module.exports = router;
