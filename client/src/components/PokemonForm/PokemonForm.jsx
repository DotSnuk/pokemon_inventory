import styles from '../Pokemon/Pokemon.module.css';
import { postUpdatePokemon } from '../../api/backend';
import { useState } from 'react';

export default function PokemonForm({ pokemon }) {
  const [nickname, setNickname] = useState(pokemon.nickname || '');
  const [isActive, setIsActive] = useState(pokemon.isActive);
  const [hp, setHP] = useState(pokemon.hp);
  const [attack, setAttack] = useState(pokemon.attack);
  const [defense, setDefense] = useState(pokemon.defense);
  const [special_attack, setSpecial_Attack] = useState(pokemon.special_attack);
  const [special_defense, setSpecial_Defense] = useState(
    pokemon.special_defense,
  );
  const [speed, setSpeed] = useState(pokemon.speed);

  function submitPokemon(e) {
    e.preventDefault();
    const trimNickname = nickname.trim();
    const data = {
      id: pokemon.id,
      nickname: trimNickname,
      isActive,
      hp,
      attack,
      defense,
      special_attack,
      special_defense,
      speed,
    };
    postUpdatePokemon(data);
  }

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={e => submitPokemon(e)}>
          <div className={styles.upper}>
            <img src={pokemon.img_url} alt='' />
            <div className={styles.info}>
              <input
                type='text'
                placeholder={pokemon.nickname || 'nickname'}
                onChange={e => setNickname(e.target.value)}
              />
              <p>
                <b>type: </b>
                {pokemon.type}
              </p>
              <p>
                <b>active:</b>{' '}
                {pokemon.is_active !== undefined && (
                  <input
                    type='checkbox'
                    checked={pokemon.is_active}
                    onChange={e => setIsActive(e.target.checked)}
                  />
                )}
              </p>
            </div>
          </div>
          <div className={styles.lower}>
            <div>
              <label htmlFor='hp'>
                <b>hp: </b>
              </label>
              <input
                id='hp'
                key='hp'
                type='number'
                placeholder={pokemon.hp}
                onChange={e => setHP(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='attack'>
                <b>Attack: </b>
              </label>
              <input
                id='attack'
                key='attack'
                type='number'
                placeholder={pokemon.attack}
                onChange={e => setAttack(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='defense'>
                <b>defense: </b>
              </label>
              <input
                id='defense'
                key='defense'
                type='number'
                placeholder={pokemon.defense}
                onChange={e => setDefense(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='special_attack'>
                <b>special_attack: </b>
              </label>
              <input
                id='special_attack'
                key='special_attack'
                type='number'
                placeholder={pokemon.special_attack}
                onChange={e => setSpecial_Attack(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='special_defense'>
                <b>special_defense: </b>
              </label>
              <input
                id='special_defense'
                key='special_defense'
                type='number'
                placeholder={pokemon.special_defense}
                onChange={e => setSpecial_Defense(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='speed'>
                <b>speed: </b>
              </label>
              <input
                id='speed'
                key='speed'
                type='number'
                placeholder={pokemon.speed}
                onChange={e => setSpeed(e.target.value)}
              />
            </div>
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </>
  );
}
