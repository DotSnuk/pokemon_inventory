// name, id and image
import styles from './PokemonGridItem.module.css';

export default function PokemonGridItem({ pokemon }) {
  return (
    <div className={styles.item}>
      <img src={pokemon.img_url} alt={pokemon.name} />
    </div>
  );
}
