// name, id and image
import styles from './PokemonGridItem.module.css';
import { LoaderPinwheel } from 'lucide-react';

export default function PokemonGridItem({ pokemon, width, gridClick }) {
  // const style = `--grid-width: ${width}`;
  return (
    <div
      style={{ '--grid-width': width + 'px' }}
      className={styles.item}
      onClick={() => gridClick(pokemon)}
    >
      {/* <LoaderWithClass /> */}
      <img src={pokemon.img_url} alt={pokemon.name} />
    </div>
  );
}

function LoaderWithClass() {
  return <LoaderPinwheel className={styles.spinning} />;
}
