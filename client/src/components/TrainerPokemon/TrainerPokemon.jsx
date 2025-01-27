import { useState, useEffect } from 'react';

export default function TrainerPokemon() {
  const [trainerPokemon, setTrainerPokemon] = useState([]); // not including active
  const [activePokemon, setActivePokemon] = useState([]);

  // useeffect to get both trainer and active pokemon

  // grid for active (use custom grid)
  // grid for other (use PokemonGrid component)
}
