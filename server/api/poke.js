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
  const results = await fetch(`${API_URL}/pokemon/${name}`, {
    mode: 'cors',
  }).then(res => {
    if (!res.ok) throw new Error('server error');
    return res.json();
  });
  return results;
}

async function getAllPokemon() {
  const urlQuery = '/pokemon/?limit=100';
  return getAllData(urlQuery);
}

async function getAllTypes() {
  const urlQuery = '/type/?limit=30';
  return getAllData(urlQuery);
}

async function getAllData(urlQuery) {
  const data = [];
  let response = null;
  let next = null;
  do {
    response === null
      ? (response = await fetch(`${API_URL}${urlQuery}`, {
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

module.exports = { getPokemons, getPokemon, getAllPokemon, getAllTypes };
