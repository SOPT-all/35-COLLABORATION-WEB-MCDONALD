import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <div style={{ height: '100%' }}>
      <Outlet />
    </div>
  </>
);

export default Layout;
