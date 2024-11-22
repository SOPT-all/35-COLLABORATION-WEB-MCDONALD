import * as S from './FilterButton.style';

type ButtonProps = {
  menuTitle: string;
  isHighlighted?: boolean;
};

const FilterButton = ({ menuTitle, isHighlighted = false }: ButtonProps) => (
  <button css={S.ButtonContainer(isHighlighted)}>{menuTitle}</button>
);

export default FilterButton;
