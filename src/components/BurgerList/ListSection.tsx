import * as S from './ListSection.style';
import { ListStyle } from '@assets/svgs/burgerList';
import FilterButton from '@components/FilterButton/FilterButton';
import BurgerPost from '@components/BurgerPost/BurgerPost';
import { PRODUCT_TYPE } from '@constants/productFilter';
import { PRODUCT_LIST } from '@constants/productList'; // API 연결 후 삭제

type ListSectionProps = {
  selectedProduct: string;
  handleProductTypeSelect: (product: string) => void;
};

const ListSection = ({
  selectedProduct,
  handleProductTypeSelect,
}: ListSectionProps) => (
  <section css={S.Section}>
    <div css={S.ProductCount}>
      <ListStyle width={4} height={4} />
      <span>21 Products</span>
    </div>

    <ul css={S.ProductFilterTab}>
      {PRODUCT_TYPE.map((text) => (
        <li key={text} onClick={() => handleProductTypeSelect(text)}>
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
          <BurgerPost burgerData={product} />
        </li>
      ))}
    </ul>
  </section>
);

export default ListSection;
