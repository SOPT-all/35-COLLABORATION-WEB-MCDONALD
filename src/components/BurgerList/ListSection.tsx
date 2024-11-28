import * as S from './ListSection.style';
import { ListStyle } from '@assets/svgs/burgerList';
import FilterButton from '@components/FilterButton/FilterButton';
import BurgerPost from '@components/BurgerPost/BurgerPost';
import { PRODUCT_TYPE } from '@constants/productFilter';
import { PRODUCT_LIST } from '@constants/productList'; // API 연결 후 삭제
import { burgerList } from 'src/types/burgerlist';
import Skeleton from '@components/common/skeleton/Skeleton';

type ListSectionProps = {
  selectedProduct: string;
  handleProductTypeSelect: (product: string) => void;
  data: burgerList[] | null | undefined;
  isLoading: boolean;
};

const ListSection = ({
  selectedProduct,
  handleProductTypeSelect,
  data,
  isLoading,
}: ListSectionProps) => {
  return (
    <section css={S.Section}>
      <div css={S.ProductCount}>
        <ListStyle width={4} height={4} />
        <span>21 Products</span>
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
          data?.map((product) => (
            <li key={product.id}>
              <BurgerPost burgerData={product} />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default ListSection;
