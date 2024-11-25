import Spacing from '@components/common/spacing/Spacing';
import Header from '@components/Header/Header';
import BottomNav from '@components/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Spacing size="6.2" />
    <Outlet />
    <BottomNav />
  </>
);

export default Layout;
