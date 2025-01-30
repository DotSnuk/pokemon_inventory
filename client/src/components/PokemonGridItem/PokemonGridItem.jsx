// name, id and image
import styles from './PokemonGridItem.module.css';

export default function PokemonGridItem({ pokemon, width, gridClick }) {
  // const style = `--grid-width: ${width}`;
  return (
    <div
      style={{ '--grid-width': width + 'px' }}
      className={styles.item}
      onClick={() => gridClick(pokemon)}
    >
      <img src={pokemon.img_url} alt={pokemon.name} />
    </div>
  );
}
