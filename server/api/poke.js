const API_URL = 'https://pokeapi.co/api/v2';

async function getPokemon() {
  const results = await fetch(`${API_URL}/pokemon/?limit=20`, {
    mode: 'cors',
  }).then(res => {
    if (!res.ok) throw new Error('server error');
    return res.json();
  });
  return results;
}

module.exports = { getPokemon };
