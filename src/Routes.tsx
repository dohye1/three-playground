import { createBrowserRouter } from 'react-router-dom';
import Playground from './pages/Playground';
import Duck from './pages/Duck';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Playground />,
  },
  {
    path: '/duck',
    element: <Duck />,
  },
]);
