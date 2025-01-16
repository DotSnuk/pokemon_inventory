import App from './App';
import Pokemon from './components/pokemon/pokemon';
import TextComponent from './components/Text/Text';
import TrainerProfile from './components/TrainerProfile/TrainerProfile';
import Trainers from './components/Trainers/Trainers';
import PokemonAdd from './components/PokemonAdd/PokemonAdd';

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
      { path: 'addPokemon', element: <PokemonAdd /> },
    ],
  },
];
