import Spacing from '@components/common/spacing/Spacing';
import Header from '@components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Spacing size="6.2" />
    <Outlet />
  </>
);

export default Layout;
