import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './views/About';
import Elo from './views/Elo';
import Presentation from './views/Presentation';
import Champs from './views/Champs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Presentation />,
      },
      {
        path: '/streaming',
        element: <About />,
      },
      {
        path: '/champs',
        element: <Champs />,
      },
      {
        path: '/elo',
        element: <Elo />,
      },
    ],
  },
]);
