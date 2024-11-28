import { useState } from 'react';
import * as S from './BurgerListPage.style';
import BurgerBanner from '@components/BurgerList/BurgerBanner';
import CategoryTab from '@components/BurgerList/CategoryTab';
import ListSection from '@components/BurgerList/ListSection';
import { CATEGORY, PRODUCT_TYPE } from '@constants/productFilter';
import { useBurgerList } from '@apis/burgerlist/queries';

const BurgerListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY[0].query);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_TYPE[0].query);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductTypeSelect = (product: string) => {
    setSelectedProduct(product);
  };

  const { data, isLoading } = useBurgerList(selectedCategory, selectedProduct);

  return (
    <div css={S.Wrapper}>
      <BurgerBanner />
      <CategoryTab {...{ selectedCategory, handleCategorySelect }} />
      <ListSection
        {...{ selectedProduct, handleProductTypeSelect, data, isLoading }}
      />
    </div>
  );
};

export default BurgerListPage;
