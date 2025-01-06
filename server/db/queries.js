const pool = require('./pool');

async function getAllTrainers() {
  const { rows } = await pool.query('SELECT * FROM trainers');
  return rows;
}

async function getAllPokemon() {
  const { rows } = await pool.query('SELECT * FROM pokemon');
  return rows;
}

async function isPokemonInDB(orderid) {
  const { rows } = await pool.query(
    'SELECT orderid FROM pokemon WHERE orderid = $1',
    [orderid],
  );
  return rows.length > 0;
}

async function insertPokemon(data) {
  const { id, name, orderid, img_url } = data;
  await pool.query(
    `INSERT INTO pokemon (id, name, orderid, img_url) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING`,
    [id, name, orderid, img_url],
  );
}

module.exports = {
  getAllTrainers,
  getAllPokemon,
  insertPokemon,
  isPokemonInDB,
};
