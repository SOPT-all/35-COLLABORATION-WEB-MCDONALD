import { createBrowserRouter } from 'react-router-dom';
import BurgerDetailPage from '@pages/burgerdetail/BurgerDetailPage';
import Main from '@pages/main/Main';
import Layout from '@layouts/Layout';
import BurgerListPage from '@pages/burgerlist/BurgerListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Main /> },
      { path: 'detail', element: <BurgerDetailPage /> },
      { path: 'list', element: <BurgerListPage /> },
    ],
  },
]);

export default router;
