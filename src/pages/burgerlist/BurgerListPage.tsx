import { useState } from 'react';
import * as S from './BurgerListPage.style';
import BurgerBanner from '@components/BurgerList/BurgerBanner';
import CategoryTab from '@components/BurgerList/CategoryTab';
import ListSection from '@components/BurgerList/ListSection';
import { CATEGORY_LIST, PRODUCT_TYPE } from '@constants/productFilter';

const BurgerListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_TYPE[0]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductTypeSelect = (product: string) => {
    setSelectedProduct(product);
  };

  return (
    <div css={S.Wrapper}>
      <BurgerBanner />
      <CategoryTab {...{ selectedCategory, handleCategorySelect }} />
      <ListSection {...{ selectedProduct, handleProductTypeSelect }} />
    </div>
  );
};

export default BurgerListPage;
