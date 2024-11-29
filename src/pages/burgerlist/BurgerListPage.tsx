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

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useBurgerList(selectedCategory, selectedProduct);

  const burgerListData = data?.pages.flat() || [];

  return (
    <div css={S.Wrapper}>
      <BurgerBanner />
      <CategoryTab {...{ selectedCategory, handleCategorySelect }} />
      <ListSection
        {...{
          selectedProduct,
          handleProductTypeSelect,
          burgerListData,
          isLoading,
          fetchNextPage,
          isFetchingNextPage,
          hasNextPage,
        }}
      />
    </div>
  );
};

export default BurgerListPage;
