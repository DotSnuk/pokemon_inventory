import styles from './PokemonPreview.module.css';

export default function PokemonPreview({ pokemon }) {
  console.log(pokemon);
  return (
    <div className={styles.container}>
      <h1>
        #{pokemon.id}, {pokemon.name}
      </h1>
      <img src={pokemon.img_url} />
      <h2>{pokemon.type}</h2>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
      <p>Special Attack: {pokemon.special_attack}</p>
      <p>Special Defense: {pokemon.special_defense}</p>
      <p>Speed: {pokemon.speed}</p>
    </div>
  );
}
