import * as S from './FilterButton.style';

type ButtonProps = {
  menuTitle: string;
  isHighlighted?: boolean;
};

const FilterButton = ({ menuTitle, isHighlighted = false }: ButtonProps) => (
  <div css={S.ButtonContainer(isHighlighted)}>{menuTitle}</div>
);

export default FilterButton;
