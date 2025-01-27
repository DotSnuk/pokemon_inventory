import styles from './PokemonAdd.module.css';
import { useState, useRef, useEffect } from 'react';
import { getPokemonWithType } from '../../api/backend';
import PokemonGrid from '../PokemonGrid/PokemonGrid';
import PokemonPreview from '../PokemonPreview/PokemonPreview';

export default function PokemonAdd() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [messageBackend, setMessageBackend] = useState('');

  useEffect(() => {
    async function handleGetPokemon() {
      await getPokemonWithType().then(data => setPokemon(data));
    }
    handleGetPokemon();
  }, []);

  function gridClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <>
      <div>{messageBackend}</div>
      <div className={styles.pokeSelector}>
        <div className={styles.container}>
          {pokemon.length > 0 && (
            <PokemonGrid pokemon={pokemon} gridClick={gridClick} />
          )}
          <div className={styles.preview}>
            {selectedPokemon !== null && (
              <PokemonPreview
                pokemon={selectedPokemon}
                setMessageBackend={setMessageBackend}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
