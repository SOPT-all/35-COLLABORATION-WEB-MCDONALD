import { useState } from 'react';
import * as S from './BurgerListPage.style';
import { Cimg12, ListStyle } from '@assets/svgs/burgerList';
import FilterButton from '@components/FilterButton/FilterButton';
import BurgerPost from '@components/BurgerPost/BurgerPost';
import { CATEGORY_LIST, PRODUCT_TYPE } from '@constants/productFilter';
import { PRODUCT_LIST } from '@constants/productList'; // API 연결 후 삭제

const BurgerListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_TYPE[0]);

  return (
    <div css={S.Wrapper}>
      <section css={S.Banner}>
        <h1>버거</h1>
        <Cimg12 />
      </section>

      <ul css={S.CategoryTab}>
        {CATEGORY_LIST.map((text) => (
          <li
            key={text}
            className={selectedCategory === text ? 'selected' : ''}
            onClick={() => setSelectedCategory(text)}
          >
            {text}
          </li>
        ))}
      </ul>

      <section css={S.ListSection}>
        <div css={S.ProductCount}>
          <ListStyle width={4} height={4} />
          <span>21 Products</span>
        </div>

        <ul css={S.ProductFilterTab}>
          {PRODUCT_TYPE.map((text) => (
            <li key={text} onClick={() => setSelectedProduct(text)}>
              <FilterButton
                menuTitle={text}
                isHighlighted={selectedProduct === text}
              />
            </li>
          ))}
        </ul>

        <ul css={S.ProductGrid}>
          {PRODUCT_LIST.map((product) => (
            <li key={product.id}>
              <BurgerPost titleKo={product.titleKo} titleEn={product.titleEn} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BurgerListPage;
