const API_URL = 'https://pokeapi.co/api/v2';

async function getPokemons() {
  const results = await fetch(`${API_URL}/pokemon/?limit=20`, {
    mode: 'cors',
  }).then(res => {
    if (!res.ok) throw new Error('server error');
    return res.json();
  });
  console.log(results);
  return results;
}

async function getPokemon(name) {
  const urlSuffix = '/pokemon/';
  return getResource(name, urlSuffix);
}

async function getType(name) {
  const urlSuffix = '/type/';
  return getResource(name, urlSuffix);
}

async function getMove(name) {
  const urlSuffix = '/move/';
  return getResource(name, urlSuffix);
}

async function getAllPokemon() {
  const urlSuffix = '/pokemon/?limit=100';
  return getAllData(urlSuffix);
}

async function getAllTypes() {
  const urlSuffix = '/type/?limit=30';
  return getAllData(urlSuffix);
}

async function getAllMoves() {
  const urlSuffix = '/move/?limit=100';
  return getAllData(urlSuffix);
}

async function getResource(name, urlSuffix) {
  const results = await fetch(`${API_URL}${urlSuffix}${name}`, {
    mode: 'cors',
  }).then(res => {
    if (!res.ok) throw new Error('server error');
    return res.json();
  });
  return results;
}

async function getAllData(urlSuffix) {
  const data = [];
  let response = null;
  let next = null;
  do {
    response === null
      ? (response = await fetch(`${API_URL}${urlSuffix}`, {
          mode: 'cors',
        }).then(res => {
          if (!res.ok) throw new Error('Server error');
          return res.json();
        }))
      : (response = await fetch(next, { mode: 'cors' }).then(res => {
          if (!res.ok) throw new Error('Server error');
          return res.json();
        }));
    data.push(...response.results);
    next = response.next;
  } while (next !== null);
  return data;
}

// async function getData(url) {
//   const response = await fetch(url, { mode: 'cors' }).then(res => {
//     if (!res.ok) throw new Error('Server error');
//     return res.json();
//   });
//   return response.results;
// }

module.exports = {
  getPokemons,
  getPokemon,
  getAllPokemon,
  getAllTypes,
  getAllMoves,
  getType,
  getMove,
};
