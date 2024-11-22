import Footer from '@components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <div style={{ height: '100%' }}>
      <Outlet />
    </div>

    <Footer />
  </>
);

export default Layout;
