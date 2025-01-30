import App from './App';
import Pokemon from './components/pokemon/pokemon';
import TrainerProfile from './components/TrainerProfile/TrainerProfile';
import Trainers from './components/Trainers/Trainers';
import PokemonAdd from './components/PokemonAdd/PokemonAdd';
import RequireTrainer from './components/RequireTrainer/RequireTrainer';
import TrainerPokemon from './components/TrainerPokemon/TrainerPokemon';

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
        path: 'trainerPokemonId/:pokemonid',
        element: <Pokemon />,
      },
      {
        path: 'trainerPokemon',
        element: (
          <RequireTrainer>
            <TrainerPokemon />
          </RequireTrainer>
        ),
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
