// name, id and image
import styles from './PokemonGridItem.module.css';
import { useLoadedContext } from '../PokemonLoadedProvider/PokemonLoadedProvider';
import { LoaderPinwheel } from 'lucide-react';

export default function PokemonGridItem({
  pokemon,
  width,
  gridClick,
  checkAllLoaded,
  loadCallback,
}) {
  const { loaded } = useLoadedContext();

  return (
    <div
      style={{ '--grid-width': width + 'px' }}
      className={styles.item}
      onClick={() => gridClick(pokemon)}
    >
      <LoaderWithClass />
      <img
        style={{ display: loaded ? 'block' : 'none' }}
        src={pokemon.img_url}
        onLoad={() => loadCallback(pokemon.id)}
        alt={pokemon.name}
      />
    </div>
  );
}

function LoaderWithClass() {
  const { loaded } = useLoadedContext();

  return (
    <LoaderPinwheel
      className={styles.spinning}
      style={{ display: loaded ? 'none' : 'block' }}
    />
  );
}
