import styles from './PokemonAdd.module.css';
import { useState, useRef, useEffect } from 'react';
import { getPokemon } from '../../api/backend';
import PokemonGridItem from '../PokemonGridItem/PokemonGridItem';

export default function PokemonAdd() {
  const PAGESIZE = 100;
  const pokemon = useRef([]);
  const [page, setPage] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const currentPokemon = getCurrentPokemon();

  useEffect(() => {
    async function handleGetPokemon() {
      await getPokemon().then(data => (pokemon.current = data));
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

  console.log(currentPokemon);

  return (
    <div className={styles.pokeSelector}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {currentPokemon.length > 0 &&
            currentPokemon.map(poke => (
              <PokemonGridItem key={poke.id} pokemon={poke} />
            ))}
        </div>
        <div className={styles.preview}></div>
      </div>
      <div className={styles.pageContainer}>
        <input type='button' value={'-'} onClick={() => decrementPage()} />
        <div>Page {page}</div>
        <input type='button' value={'+'} onClick={() => incrementPage()} />
      </div>
    </div>
  );
}
