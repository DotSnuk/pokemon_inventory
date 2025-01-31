import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainerPokemonId } from '../../api/backend';
import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';
import PokemonProfile from '../PokemonProfile/PokemonProfile';
import PokemonForm from '../PokemonForm/PokemonForm';

export default function Pokemon() {
  const { pokemonid } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function handleGetTrainerPokemon() {
      await getTrainerPokemonId(pokemonid).then(data => setPokemon(data));
    }
    handleGetTrainerPokemon();
  }, []);

  return (
    <>
      {isEditing === false ? (
        <PokemonProfile pokemon={pokemon} />
      ) : (
        <PokemonForm pokemon={pokemon} />
      )}
      <input
        type='button'
        onClick={() => setIsEditing(!isEditing)}
        value='Edit'
      />
    </>
  );
}
