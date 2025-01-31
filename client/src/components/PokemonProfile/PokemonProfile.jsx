import styles from '../Pokemon/Pokemon.module.css';

export default function PokemonProfile({ pokemon }) {
  const nameString =
    pokemon.nickname === null
      ? pokemon.name
      : pokemon.nickname + ` (${pokemon.name})`;

  const stats = [];
  const keys = [
    'hp',
    'attack',
    'defense',
    'special_attack',
    'special_defense',
    'speed',
  ];
  for (const [key, value] of Object.entries(pokemon)) {
    if (keys.includes(key))
      stats.push(
        <p key={key}>
          <b>{key}:</b> {value}
        </p>,
      );
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <img src={pokemon.img_url} alt='' />
        <div className={styles.info}>
          <h1>{nameString}</h1>
          <p>
            <b>type: </b>
            {pokemon.type}
          </p>
          <p>
            <b>active:</b>{' '}
            {pokemon.is_active !== undefined && (
              <input type='checkbox' checked={pokemon.is_active} disabled />
            )}
          </p>
        </div>
      </div>
      <div className={styles.lower}>{stats}</div>
    </div>
  );
}
