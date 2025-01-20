// name, id and image
import styles from './PokemonGridItem.module.css';

export default function PokemonGridItem({ pokemon, divClick }) {
  return (
    <div className={styles.item} onClick={() => divClick(pokemon)}>
      <img src={pokemon.img_url} alt={pokemon.name} />
    </div>
  );
}
