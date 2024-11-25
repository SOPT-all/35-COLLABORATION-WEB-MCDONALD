import { createBrowserRouter } from 'react-router-dom';
import Main from '@pages/main/Main';
import Layout from '@layouts/Layout';
import BurgerListPage from '@pages/burgerlist/BurgerListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Main /> },
      { path: 'list', element: <BurgerListPage /> },
    ],
  },
]);

export default router;
