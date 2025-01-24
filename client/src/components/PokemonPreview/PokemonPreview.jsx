import styles from './PokemonPreview.module.css';
import { useState } from 'react';
import { postAddPokemon } from '../../api/backend';
import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';

export default function PokemonPreview({ pokemon, setMessageBackend }) {
  const [nickname, setNickname] = useState('');
  const [isActive, setIsActive] = useState(false);
  const trainerId = useActiveTrainer().id;
  return (
    <div className={styles.container}>
      <h1>
        #{pokemon.id}, {pokemon.name}
      </h1>
      <img src={pokemon.img_url} />
      <h2>{pokemon.type}</h2>
      <p>
        <b>HP:</b> {pokemon.hp}
      </p>
      <p>
        <b>Attack:</b> {pokemon.attack}
      </p>
      <p>
        <b>Defense:</b> {pokemon.defense}
      </p>
      <p>
        <b>Special Attack:</b> {pokemon.special_attack}
      </p>
      <p>
        <b>Special Defense:</b> {pokemon.special_defense}
      </p>
      <p>
        <b>Speed:</b> {pokemon.speed}
      </p>
      <form
        onSubmit={e =>
          addTrainerPokemon(
            e,
            trainerId,
            pokemon,
            nickname.trim(),
            isActive,
            setMessageBackend,
          )
        }
        method='POST'
      >
        <label htmlFor='isActive'>Is active: </label>
        <input
          type='checkbox'
          defaultChecked={isActive}
          onChange={e => setIsActive(e.target.checked)}
          name='isActive'
          id='isActive'
        />
        <input
          type='text'
          name='nickname'
          id='nickname'
          placeholder='Optional nickname'
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

async function addTrainerPokemon(
  e,
  trainerId,
  pokemon,
  nickname,
  isActive,
  setMessageBackend,
) {
  e.preventDefault();
  const data =
    nickname === ''
      ? { trainerId, pokemon, nickname: null, isActive }
      : { trainerId, pokemon, nickname, isActive };
  const message = await postAddPokemon(data);
  setMessageBackend(message);
  // call backend
}
