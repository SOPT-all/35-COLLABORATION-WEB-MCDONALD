import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Layout from '@layouts/Layout';
import BurgerDetailPage from '@pages/burgerdetail/BurgerDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Main /> },
      { path: 'detail', element: <BurgerDetailPage /> },
    ],
  },
]);

export default router;
