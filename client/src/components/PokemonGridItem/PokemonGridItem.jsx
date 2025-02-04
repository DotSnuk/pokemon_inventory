// name, id and image
import styles from './PokemonGridItem.module.css';
import { useLoadedContext } from '../PokemonLoadedProvider/PokemonLoadedProvider';
import { LoaderPinwheel } from 'lucide-react';

export default function PokemonGridItem({
  pokemon,
  width,
  gridClick,
  loadCallback,
}) {
  const { loaded } = useLoadedContext();

  return (
    <div
      style={{ '--grid-width': width + 'px' }}
      className={styles.item}
      onClick={() => gridClick(pokemon)}
    >
      <LoaderWithClass width={width} />
      <img
        style={{ display: loaded ? 'block' : 'none' }}
        src={pokemon.img_url ? pokemon.img_url : getPlaceholderSrc()}
        onLoad={() => loadCallback(pokemon.id)}
        onError={() => console.log('error loading image')}
        alt={pokemon.name}
      />
    </div>
  );
}

function getPlaceholderSrc() {
  return '/placeholder/cat.png';
}

function LoaderWithClass({ width }) {
  const { loaded } = useLoadedContext();

  return (
    <div
      style={{
        '--grid-width': width + 'px',
        display: loaded ? 'none' : 'flex',
      }}
      className={styles.wrapper}
    >
      <LoaderPinwheel className={styles.spinning} size={width / 4} />
    </div>
  );
}
