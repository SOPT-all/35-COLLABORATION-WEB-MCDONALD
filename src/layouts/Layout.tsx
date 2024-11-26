import Footer from '@components/footer/Footer';
import Spacing from '@components/common/spacing/Spacing';
import Header from '@components/Header/Header';
import BottomNav from '@components/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const Layout = () => (
  <>
    <div css={layoutStyle}>
      <Header />
      <Spacing size="6.2" />
      <Outlet />
    </div>
    <BottomNav />
    <Footer />
  </>
);

export default Layout;

const layoutStyle = css`
  height: calc(100% - 6.2rem);
`;
