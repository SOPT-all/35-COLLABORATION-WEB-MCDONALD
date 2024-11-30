import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('@layouts/Layout'));
const Main = lazy(() => import('@pages/main/Main'));
const BurgerDetailPage = lazy(
  () => import('@pages/burgerdetail/BurgerDetailPage'),
);
const BurgerListPage = lazy(() => import('@pages/burgerlist/BurgerListPage'));
const FavoriteListPage = lazy(
  () => import('@pages/favoriteList/FavoriteListPage'),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Main /> },
      { path: 'detail/:burger_id', element: <BurgerDetailPage /> },
      { path: 'list', element: <BurgerListPage /> },
      { path: 'favorite', element: <FavoriteListPage /> },
    ],
  },
]);

export default router;
