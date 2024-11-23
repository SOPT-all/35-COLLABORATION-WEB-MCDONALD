import * as S from '../BurgerPost/BugerPost.style';

type Props = {
  title: string;
};

const BurgerPost = ({ title }: Props) => (
  <div css={S.postStyleContainer}>
    <h1>{title}</h1>
  </div>
);

export default BurgerPost;
