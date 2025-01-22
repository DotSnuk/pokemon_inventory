import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';
import { Navigate } from 'react-router-dom';

export default function RequireTrainer({ children }) {
  const trainer = useActiveTrainer();

  return trainer === null ? <Navigate to='/' replace /> : children;
}
