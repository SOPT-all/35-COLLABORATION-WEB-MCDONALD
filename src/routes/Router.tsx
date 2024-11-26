import { createBrowserRouter } from 'react-router-dom';
import Main from '@pages/main/Main';
import Layout from '@layouts/Layout';
import BurgerListPage from '@pages/burgerlist/BurgerListPage';
import FavoriteListPage from '@pages/favoriteList/FavoriteListPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Main /> },
      { path: 'list', element: <BurgerListPage /> },
      { path: 'favorite', element: <FavoriteListPage /> },
    ],
  },
]);

export default router;
