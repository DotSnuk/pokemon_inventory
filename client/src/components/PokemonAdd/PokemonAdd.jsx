import styles from './PokemonAdd.module.css';
import { useState, useRef, useEffect } from 'react';
import { getPokemonWithType } from '../../api/backend';
import PokemonGridItem from '../PokemonGridItem/PokemonGridItem';
import PokemonPreview from '../PokemonPreview/PokemonPreview';

export default function PokemonAdd() {
  const PAGESIZE = 100;
  const pokemon = useRef([]);
  const [page, setPage] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [messageBackend, setMessageBackend] = useState('');
  const currentPokemon = getCurrentPokemon();

  useEffect(() => {
    async function handleGetPokemon() {
      await getPokemonWithType().then(data => (pokemon.current = data));
      setPage(1);
    }
    handleGetPokemon();
  }, []);

  function getCurrentPokemon() {
    if (page * PAGESIZE > pokemon.current.length)
      return pokemon.current.slice((page - 1) * PAGESIZE);
    return pokemon.current.slice((page - 1) * PAGESIZE, page * PAGESIZE);
  }

  function incrementPage() {
    if (page * PAGESIZE < pokemon.current.length) setPage(page => page + 1);
  }

  function decrementPage() {
    if (page - 1 > 0) setPage(page => page - 1);
  }

  function divClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className={styles.pokeSelector}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {currentPokemon.length > 0 &&
            currentPokemon.map(poke => (
              <PokemonGridItem
                key={poke.id}
                pokemon={poke}
                divClick={divClick}
              />
            ))}
        </div>
        <div className={styles.preview}>
          {selectedPokemon !== null && (
            <PokemonPreview
              pokemon={selectedPokemon}
              setMessageBackend={setMessageBackend}
            />
          )}
        </div>
      </div>
      <div className={styles.pageContainer}>
        {messageBackend}
        <input type='button' value={'-'} onClick={() => decrementPage()} />
        <div>Page {page}</div>
        <input type='button' value={'+'} onClick={() => incrementPage()} />
      </div>
    </div>
  );
}
