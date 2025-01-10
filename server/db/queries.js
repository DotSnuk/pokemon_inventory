const pool = require('./pool');

async function getAllTrainers() {
  const { rows } = await pool.query('SELECT * FROM trainers');
  return rows;
}

async function getAllPokemon() {
  const { rows } = await pool.query('SELECT * FROM pokemon');
  return rows;
}

async function getAllMoves() {
  const { rows } = await pool.query('SELECT * FROM moves');
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

async function insertType(data) {
  const { id, name } = data;
  await pool.query(
    `INSERT INTO types (id, name) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING`,
    [id, name],
  );
}

async function insertMove(data) {
  const { id, name, accuracy, effect, power, pp, priority, type_id } = data;
  await pool.query(
    `INSERT INTO moves (id, name, accuracy, effect, power, pp, priority, type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (id) DO NOTHING`,
    [id, name, accuracy, effect, power, pp, priority, type_id],
  );
}

async function insertPokemonType(data) {
  const { pokemon_id, type_id } = data;
  await pool.query(
    `INSERT INTO pokemon_types (pokemon_id, type_id) VALUES ($1, $2) ON CONFLICT (pokemon_id, type_id) DO NOTHING`,
    [pokemon_id, type_id],
  );
}

async function insertPokemonMove(data) {
  const { pokemon_id, move_id } = data;
  await pool.query(
    `INSERT INTO pokemon_moves (pokemon_id, move_id) VALUES ($1, $2) ON CONFLICT (pokemon_id, move_id) DO NOTHING`,
    [pokemon_id, move_id],
  );
}

async function getAllTypes() {
  const { rows } = await pool.query(`SELECT * FROM types`);
  return rows;
}

module.exports = {
  getAllTrainers,
  getAllPokemon,
  getAllMoves,
  insertPokemon,
  isPokemonInDB,
  getAllTypes,
  insertType,
  insertMove,
  insertPokemonType,
  insertPokemonMove,
};
