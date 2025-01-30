import { useState, useEffect } from 'react';
import { getTrainerPokemon } from '../../api/backend';
import PokemonGrid from '../PokemonGrid/PokemonGrid';
import { useNavigate } from 'react-router-dom';
import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';

export default function TrainerPokemon() {
  const [inactivePokemon, setInactivePokemon] = useState([]); // not including active
  const [activePokemon, setActivePokemon] = useState([]);
  const currentTrainer = useActiveTrainer();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetPokemon() {
      await getTrainerPokemon(currentTrainer.id).then(data => {
        setActivePokemon(data.active);
        setInactivePokemon(data.inactive);
      });
    }
    handleGetPokemon();
  }, []);

  function gridClick(pokemon) {
    navigate(`/trainerPokemonId/${pokemon.id}`);
  }

  return (
    <>
      <PokemonGrid pokemon={activePokemon} gridClick={gridClick} />
      <PokemonGrid
        pokemon={inactivePokemon}
        pagesize={20}
        gridClick={gridClick}
      />
    </>
  );
  // useeffect to get both trainer and active pokemon
  // await both. Promise.all?

  // grid for active (use custom grid)
  // grid for other (use PokemonGrid component)
}
