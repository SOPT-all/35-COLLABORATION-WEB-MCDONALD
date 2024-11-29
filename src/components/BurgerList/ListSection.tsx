import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import * as S from './ListSection.style';
import { ListStyle } from '@assets/svgs/burgerList';
import FilterButton from '@components/FilterButton/FilterButton';
import BurgerPost from '@components/BurgerPost/BurgerPost';
import Skeleton from '@components/common/skeleton/Skeleton';
import { PRODUCT_TYPE } from '@constants/productFilter';
import { useBurgerList } from '@apis/burgerlist/queries';

type ListSectionProps = {
  selectedCategory: string;
  selectedProduct: string;
  handleProductTypeSelect: (product: string) => void;
};

const ListSection = ({
  selectedCategory,
  selectedProduct,
  handleProductTypeSelect,
}: ListSectionProps) => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useBurgerList(selectedCategory, selectedProduct);

  const burgerListData = data?.pages.flat() || [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const navDetail = (id: number): void => {
    navigate(`/detail/${id}`, { state: burgerListData });
  };

  return (
    <section css={S.Section}>
      <div css={S.ProductCount}>
        <ListStyle width={4} height={4} />
        <span>{burgerListData?.length} Products</span>
      </div>

      <ul css={S.ProductFilterTab}>
        {PRODUCT_TYPE.map((type) => (
          <li
            key={type.label}
            onClick={() => handleProductTypeSelect(type.query)}
          >
            <FilterButton
              menuTitle={type.label}
              isHighlighted={selectedProduct === type.query}
            />
          </li>
        ))}
      </ul>

      <ul css={S.ProductGrid}>
        {isLoading ? (
          <>
            <Skeleton width="100%" height="25.4rem" borderRadius="10px" />
            <Skeleton width="100%" height="25.4rem" borderRadius="10px" />
          </>
        ) : (
          burgerListData?.map((product) => (
            <li key={product.id}>
              <BurgerPost burgerData={product} navDetail={navDetail} />
            </li>
          ))
        )}

        {isFetchingNextPage ? (
          <>
            <Skeleton width="100%" height="25.4rem" borderRadius="10px" />
            <Skeleton width="100%" height="25.4rem" borderRadius="10px" />
          </>
        ) : (
          hasNextPage && <li ref={ref} css={S.ListEndView} />
        )}
      </ul>
    </section>
  );
};

export default ListSection;
