import React from 'react';
import * as S from './FavoriteListPage.style';
import { Cimg12, ListStyle } from '@assets/svgs/burgerList';

const FavoriteListPage = () => {
  const bannerTitle = ['내 메뉴'];
  return (
    <div css={S.Banner}>
      <h1 className="banner__title">{bannerTitle[0]}</h1>
      <Cimg12 />
    </div>
  );
};

export default FavoriteListPage;
