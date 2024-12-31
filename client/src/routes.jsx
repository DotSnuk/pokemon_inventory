import App from './App';
import TextComponent from './components/Text/Text';
import Trainers from './components/Trainers/Trainers';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <TextComponent />,
      },
      {
        path: 'trainers',
        element: <Trainers />,
      },
    ],
  },
];
