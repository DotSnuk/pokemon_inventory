const db = require('../db/queries');

async function allTrainersGet(req, res) {
  const trainers = await db.getAllTrainers();
  res.send(trainers);
}

module.exports = {
  allTrainersGet,
};
