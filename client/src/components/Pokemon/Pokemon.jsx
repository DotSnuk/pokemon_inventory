import { useEffect, useState } from 'react';
import { getPokemon } from '../../api/backend';
import Card from '../Card/Card';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function handleGetPokemon() {
      await getPokemon().then(data => {
        setPokemon(data);
      });
    }
    handleGetPokemon();
  }, []);

  return (
    <>
      {pokemon.length > 0 &&
        pokemon.map(poke => <Card key={poke.id} name={poke.name} />)}
    </>
  );
}
