import { useState, useRef, useEffect, useMemo } from 'react';
import { useLoadedContext } from '../PokemonLoadedProvider/PokemonLoadedProvider';
import PokemonGridItem from '../PokemonGridItem/PokemonGridItem';
import styles from './PokemonGrid.module.css';

export default function PokemonGrid({ pokemon, gridClick, pagesize = 36 }) {
  const [page, setPage] = useState(1);
  const [pokemonWithStatus, setPokemonWithStatus] = useState([]);
  const containerRef = useRef(null);
  const [gridWidth, setGridWidth] = useState(0);
  const { loaded, setLoaded } = useLoadedContext();

  useEffect(() => {
    if (containerRef.current !== null)
      getGridWidth(containerRef.current.offsetWidth);
  }, [containerRef.current]);

  useEffect(() => {
    const initialPokemonWithStatus = pokemon.map(poke => ({
      ...poke,
      loaded: false,
    }));
    setPokemonWithStatus(initialPokemonWithStatus);
  }, [pokemon]);

  useEffect(() => {
    const currentStart = (page - 1) * pagesize;
    const currentEnd = Math.min(page * pagesize, pokemonWithStatus.length);
    const currentPagePokemon = pokemonWithStatus.slice(
      currentStart,
      currentEnd,
    );
    const allLoaded = currentPagePokemon.every(poke => poke.loaded === true);
    setLoaded(allLoaded);
  }, [pokemonWithStatus, page, pagesize]);

  const currentPokemon = useMemo(() => {
    if (pokemonWithStatus.length === 0) return [];
    const start = (page - 1) * pagesize;
    const end = page * pagesize;
    return pokemonWithStatus.slice(
      start,
      Math.min(end, pokemonWithStatus.length),
    );
  }, [page, pagesize, pokemonWithStatus]);

  function getGridWidth(container) {
    setGridWidth(Math.floor(container / 6));
  }

  function updatePokemonLoadStatus(pokemonId) {
    setPokemonWithStatus(prev => {
      const newState = prev.map(poke =>
        poke.id === pokemonId ? { ...poke, loaded: true } : poke,
      );

      return newState;
    });
  }

  function incrementPage() {
    if (page * pagesize < pokemon.length) {
      setPage(page => page + 1);
      setLoaded(false);
    }
  }

  function decrementPage() {
    if (page - 1 > 0) {
      setPage(page => page - 1);
      setLoaded(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid} ref={containerRef}>
        {currentPokemon.map(poke => (
          <PokemonGridItem
            key={poke.id}
            width={gridWidth}
            gridClick={gridClick}
            pokemon={poke}
            loadCallback={updatePokemonLoadStatus}
          />
        ))}
      </div>
      {pokemon.length > pagesize && (
        <div className={styles.pageContainer}>
          <input type='button' value={'-'} onClick={() => decrementPage()} />
          <div>Page {page}</div>
          <input type='button' value={'+'} onClick={() => incrementPage()} />
        </div>
      )}
    </div>
  );
}
