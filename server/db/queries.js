const pool = require('./pool');

async function getAllTrainers() {
  const { rows } = await pool.query('SELECT * FROM trainers');
  return rows;
}

async function getAllPokemon(isSorted) {
  const { rows } =
    isSorted === 'true'
      ? await pool.query(
          'SELECT * FROM pokemon WHERE orderid != -1 AND id < 10000 ORDER BY id',
        )
      : await pool.query(`SELECT * FROM pokemon`);
  return rows;
}

async function getAllPokemonWithType() {
  const { rows } = await pool.query(
    `SELECT p.*, STRING_AGG(t.name, ', ') AS type FROM pokemon p JOIN pokemon_types pt ON p.id = pt.pokemon_id JOIN types t ON t.id = pt.type_id GROUP BY p.id`,
  );
  return rows;
}

async function getAllMoves() {
  const { rows } = await pool.query('SELECT * FROM moves');
  return rows;
}

async function getCountPokemonTrainer(trainerId) {
  const { rows } = await pool.query(
    `SELECT Count(pokemon_id) FROM trainer_pokemon WHERE trainer_id = $1`,
    [trainerId],
  );
  return rows[0].count;
}

async function isPokemonInDB(orderid) {
  const { rows } = await pool.query(
    'SELECT orderid FROM pokemon WHERE orderid = $1',
    [orderid],
  );
  return rows.length > 0;
}

async function insertPokemon(data) {
  const {
    id,
    name,
    orderid,
    img_url,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed,
  } = data;
  await pool.query(
    `INSERT INTO pokemon (id, name, orderid, img_url, hp, attack, defense, special_attack, special_defense, speed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT (id) DO NOTHING`,
    [
      id,
      name,
      orderid,
      img_url,
      hp,
      attack,
      defense,
      special_attack,
      special_defense,
      speed,
    ],
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

async function updateWithStats(data) {
  const { id, hp, attack, defense, special_attack, special_defense, speed } =
    data;
  await pool.query(
    `UPDATE pokemon SET hp = $2, attack = $3, defense = $4, special_attack = $5, special_defense = $6, speed = $7 WHERE id = $1`,
    [id, hp, attack, defense, special_attack, special_defense, speed],
  );
}

async function addPokemonTrainer(data) {
  const { trainerId, pokemon, nickname, isActive } = data;
  try {
    const { rows } = await pool.query(
      `INSERT INTO trainer_pokemon (trainer_id, pokemon_id, is_active, hp, attack, defense, special_attack, special_defense, speed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
      [
        trainerId,
        pokemon.id,
        isActive,
        pokemon.hp,
        pokemon.attack,
        pokemon.defense,
        pokemon.special_attack,
        pokemon.special_defense,
        pokemon.speed,
      ],
    );
    if (nickname !== null)
      pool.query(`UPDATE trainer_pokemon SET nickname = $1 WHERE id = $2`, [
        nickname,
        rows[0].id,
      ]);
    return rows;
  } catch (error) {
    console.error('Error in adding pokemon to trainer', error);
    throw new Error('Failed to add Pokemon to Trainer');
  }
}

module.exports = {
  getAllTrainers,
  getAllPokemon,
  getAllMoves,
  getCountPokemonTrainer,
  getAllPokemonWithType,
  insertPokemon,
  isPokemonInDB,
  getAllTypes,
  insertType,
  insertMove,
  insertPokemonType,
  insertPokemonMove,
  updateWithStats,
  addPokemonTrainer,
};
