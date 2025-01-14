import { useRef, useEffect, useState } from 'react';
import { getPokemonCount } from '../../api/backend';
import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';
import Button from '../Button/Button';

export default function ProfileMenu() {
  const [pokemonCount, setPokemonCount] = useState('');
  const currentTrainer = useActiveTrainer();

  useEffect(() => {
    async function handleGetPokemonCount(id) {
      await getPokemonCount(id).then(data => setPokemonCount(data));
    }

    handleGetPokemonCount(currentTrainer.id);
  }, [currentTrainer]);

  return (
    <nav>
      <Button
        name={'Pokemon'}
        path={'/trainerPokemon'}
        optionalText={pokemonCount}
      />
    </nav>
  );
}
