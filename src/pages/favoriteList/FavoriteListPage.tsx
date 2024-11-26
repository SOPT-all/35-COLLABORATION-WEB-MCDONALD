import * as S from './FavoriteListPage.style';
import { Cimg12, ListStyle } from '@assets/svgs/burgerList';
import { PRODUCT_LIST } from '@constants/productList';
import BurgerPost from '@components/BurgerPost/BurgerPost';
const FavoriteListPage = () => {
  const productLength = PRODUCT_LIST.length;
  const bannerTitle = '내 메뉴';
  return (
    <>
      <section css={S.Banner}>
        <h1 className="banner__title">{bannerTitle}</h1>
        <Cimg12 />
      </section>
      <section css={S.ProductCount}>
        <ListStyle width={4} height={4} />
        <span>{`${productLength} products`}</span>
      </section>

      <ul css={S.PostGrid}>
        {PRODUCT_LIST.map((product) => (
          <li key={product.id}>
            <BurgerPost titleKo={product.titleKo} titleEn={product.titleEn} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FavoriteListPage;
