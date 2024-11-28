import * as S from './CategoryTab.style';
import { CATEGORY_LIST } from '@constants/productFilter';

type CategoryTabProps = {
  selectedCategory: string;
  handleCategorySelect: (category: string) => void;
};

const CategoryTab = ({
  selectedCategory,
  handleCategorySelect,
}: CategoryTabProps) => (
  <ul css={S.Container}>
    {CATEGORY_LIST.map((text) => (
      <li
        key={text}
        className={selectedCategory === text ? 'selected' : ''}
        onClick={() => handleCategorySelect(text)}
      >
        {text}
      </li>
    ))}
  </ul>
);

export default CategoryTab;
