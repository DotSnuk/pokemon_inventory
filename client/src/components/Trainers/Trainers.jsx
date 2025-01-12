import { useEffect, useState, useContext } from 'react';
import { getTrainers } from '../../api/backend';
import Card from '../Card/Card';
import styles from './Trainers.module.css';
import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';

export default function Trainer() {
  const [trainers, setTrainers] = useState([]);
  const activeTrainer = useActiveTrainer();
  console.log(activeTrainer);

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
