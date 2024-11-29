import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import * as S from './ListSection.style';
import { ListStyle } from '@assets/svgs/burgerList';
import FilterButton from '@components/FilterButton/FilterButton';
import BurgerPost from '@components/BurgerPost/BurgerPost';
import { PRODUCT_TYPE } from '@constants/productFilter';
import { burgerList } from 'src/types/burgerlist';
import Skeleton from '@components/common/skeleton/Skeleton';

type ListSectionProps = {
  selectedProduct: string;
  handleProductTypeSelect: (product: string) => void;
  burgerListData: burgerList[];
  isLoading: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
};

const ListSection = ({
  selectedProduct,
  handleProductTypeSelect,
  burgerListData,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: ListSectionProps) => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

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
          hasNextPage && (
            <li ref={ref} style={{ width: '100%', height: '2rem' }} />
          )
        )}
      </ul>
    </section>
  );
};

export default ListSection;
