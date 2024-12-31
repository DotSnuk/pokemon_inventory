import styles from './Card.module.css';

export default function Card({ name }) {
  return <div className={styles.card}>{name}</div>;
}
