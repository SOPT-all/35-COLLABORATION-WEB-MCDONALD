import * as S from './CategoryTab.style';
import { CATEGORY } from '@constants/productFilter';

type CategoryTabProps = {
  selectedCategory: string;
  handleCategorySelect: (category: string) => void;
};

const CategoryTab = ({
  selectedCategory,
  handleCategorySelect,
}: CategoryTabProps) => {
  return (
    <ul css={S.Container}>
      {CATEGORY.map((list) => (
        <li
          key={list.label}
          className={selectedCategory === list.query ? 'selected' : ''}
          onClick={() => handleCategorySelect(list.query)}
        >
          {list.label}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTab;
