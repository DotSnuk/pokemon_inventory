import { useState } from 'react';
import PokemonGridItem from '../PokemonGridItem/PokemonGridItem';

export default function PokemonGrid(pokemon, pagesize = 100) {
  const [page, setPage] = useState(1);
  const currentPokemon = getCurrentPokemon();

  function getCurrentPokemon() {
    if (page * pagesize > pokemon.current.length)
      return pokemon.current.slice((page - 1) * pagesize);
    return pokemon.current.slice((page - 1) * pagesize, page * pagesize);
  }

  function incrementPage() {
    if (page * pagesize < pokemon.current.length) setPage(page => page + 1);
  }

  function decrementPage() {
    if (page - 1 > 0) setPage(page => page - 1);
  }
}
