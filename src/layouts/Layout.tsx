import Header from '@components/Header/Header';
import BottomNav from '@components/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <BottomNav />
  </>
);

export default Layout;
