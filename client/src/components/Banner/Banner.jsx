import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';
import styles from './Banner.module.css';

export default function Banner() {
  const trainer = useActiveTrainer();
  // change to header
  return (
    <header className={styles.container}>
      <img src={`/avatar/${trainer.avatar_path}`} />
      <section>
        <h1>{trainer.name}</h1>
        <h2>Age: {trainer.age}</h2>
      </section>
    </header>
  );
}
