import React from 'react';
import * as S from './FavoriteListPage.style';
import { Cimg12, ListStyle } from '@assets/svgs/burgerList';
import { PRODUCT_LIST } from '@constants/productList';
const FavoriteListPage = () => {
  const productLength = PRODUCT_LIST.length;
  const bannerTitle = ['내 메뉴'];
  return (
    <>
      <section css={S.Banner}>
        <h1 className="banner__title">{bannerTitle[0]}</h1>
        <Cimg12 />
      </section>
      <section css={S.ProductCount}>
        <ListStyle width={4} height={4} />
        <span>{`${productLength} products`}</span>
      </section>
    </>
  );
};

export default FavoriteListPage;
