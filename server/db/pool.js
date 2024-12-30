const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'snuken',
  database: 'pokemon_inventory',
  password: process.env.DB_PASSWORD,
  port: 5432,
});
