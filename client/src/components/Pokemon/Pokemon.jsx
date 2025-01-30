import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainerPokemonId } from '../../api/backend';
import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';
import Card from '../Card/Card';

export default function Pokemon() {
  const { pokemonid } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function handleGetTrainerPokemon() {
      await getTrainerPokemonId(pokemonid).then(data => setPokemon(data));
    }
    handleGetTrainerPokemon();
  }, []);

  console.log(pokemon);

  return (
    <>
      {pokemon.name}
      {/* {pokemon.length > 0 &&
        pokemon.map(poke => <Card key={poke.id} name={poke.name} />)} */}
    </>
  );
}
