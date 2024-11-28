import { ImgMenu1 } from '@assets/svgs/burger';
import * as S from './BurgerPost.style';
import LikeButton from '@components/LikeButton/LikeButton';

type BurgerPostProps = {
  burgerData: {
    id: number;
    burgerName: string;
    burgerNameEng: string;
    isLike?: boolean;
    liked?: boolean;
  };
};

const BurgerPost = ({ burgerData }: BurgerPostProps) => (
  <div css={S.postStyleContainer}>
    <section css={S.imageSection}>
      <ImgMenu1 />
      <LikeButton isClicked={false} />
    </section>
    <section css={S.titleSection}>
      <p className="title__ko">{burgerData.burgerName}</p>
      <p className="title__en">{burgerData.burgerNameEng}</p>
    </section>
  </div>
);

export default BurgerPost;
