// name, id and image
import styles from './PokemonGridItem.module.css';

export default function PokemonGridItem({ pokemon, gridClick }) {
  return (
    <div className={styles.item} onClick={() => gridClick(pokemon)}>
      <img src={pokemon.img_url} alt={pokemon.name} />
    </div>
  );
}
