import { useEffect, useState } from 'react';
import { getTrainers } from '../../api/backend';
import Card from '../Card/Card';
import styles from './Trainers.module.css';

export default function Trainer() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    async function handleGetTrainers() {
      await getTrainers().then(data => setTrainers(data));
    }
    handleGetTrainers();
  }, []);

  const trainerCards = trainers.map(trainer => (
    <Card key={trainer.id} name={trainer.name} />
  ));

  return (
    <>
      <div className={styles.container}>{trainerCards}</div>
    </>
  );
}
