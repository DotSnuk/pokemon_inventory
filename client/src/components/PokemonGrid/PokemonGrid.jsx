import { useState } from 'react';
import PokemonGridItem from '../PokemonGridItem/PokemonGridItem';
import styles from './PokemonGrid.module.css';

export default function PokemonGrid({ pokemon, gridClick, pagesize = 100 }) {
  const [page, setPage] = useState(1);
  const currentPokemon = getCurrentPokemon();

  function getCurrentPokemon() {
    if (page * pagesize > pokemon.length)
      return pokemon.slice((page - 1) * pagesize);
    return pokemon.slice((page - 1) * pagesize, page * pagesize);
  }

  function incrementPage() {
    if (page * pagesize < pokemon.length) setPage(page => page + 1);
  }

  function decrementPage() {
    if (page - 1 > 0) setPage(page => page - 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {currentPokemon.map(poke => (
          <PokemonGridItem key={poke.id} gridClick={gridClick} pokemon={poke} />
        ))}
      </div>
      <div className={styles.pageContainer}>
        <input type='button' value={'-'} onClick={() => decrementPage()} />
        <div>Page {page}</div>
        <input type='button' value={'+'} onClick={() => incrementPage()} />
      </div>
    </div>
  );
}
