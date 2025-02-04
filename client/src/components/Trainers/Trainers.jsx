import { useEffect, useState, useContext } from 'react';
import { getTrainers } from '../../api/backend';
import Card from '../Card/Card';
import styles from './Trainers.module.css';
import { Link } from 'react-router-dom';
import {
  useActiveTrainer,
  useSetActiveTrainer,
} from '../TrainerContext/TrainerContextProvider';

export default function Trainer() {
  const [trainers, setTrainers] = useState([]);
  const setActiveTrainer = useSetActiveTrainer();

  useEffect(() => {
    async function handleGetTrainers() {
      await getTrainers().then(data => setTrainers(data));
    }
    handleGetTrainers();
  }, []);

  const trainerCards = trainers.map(trainer => (
    <Link
      to='/trainerProfile'
      key={trainer.id}
      onClick={() => setActiveTrainer(trainer)}
    >
      <Card name={trainer.name} />
    </Link>
  ));

  return (
    <>
      <div className={styles.container}>{trainerCards}</div>
    </>
  );
}
