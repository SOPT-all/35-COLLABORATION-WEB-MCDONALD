import Footer from '@components/footer/Footer';
import Spacing from '@components/common/spacing/Spacing';
import Header from '@components/Header/Header';
import BottomNav from '@components/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import FabButton from '@components/FabButton/FabButton';
import useScrollToTop from 'src/hooks/useScrollToTop';

const Layout = () => {
  useScrollToTop();

  return (
    <>
      <div css={layoutStyle}>
        <Header />
        <Spacing size="6.2" />
        <Outlet />
        <FabButton />
      </div>
      <BottomNav />
      <Footer />
    </>
  );
};

export default Layout;

const layoutStyle = css`
  height: calc(100% - 6.2rem);
`;
