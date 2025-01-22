import App from './App';
import Pokemon from './components/pokemon/pokemon';
import TrainerProfile from './components/TrainerProfile/TrainerProfile';
import Trainers from './components/Trainers/Trainers';
import PokemonAdd from './components/PokemonAdd/PokemonAdd';
import RequireTrainer from './components/RequireTrainer/RequireTrainer';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Trainers />,
      },
      {
        path: 'trainerProfile',
        element: <TrainerProfile />,
      },
      {
        path: 'pokemon',
        element: <Pokemon />,
      },
      {
        path: 'addPokemon',
        element: (
          <RequireTrainer>
            <PokemonAdd />
          </RequireTrainer>
        ),
      },
    ],
  },
];
