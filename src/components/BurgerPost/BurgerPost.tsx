import { ImgMenu1 } from '@assets/svgs/burger';
import * as S from './BurgerPost.style';
import LikeButton from '@components/LikeButton/LikeButton';

type BugerPostProps = {
  titleKo: string;
  titleEn: string;
};

const BurgerPost = ({ titleEn, titleKo }: BugerPostProps) => (
  <div css={S.postStyleContainer}>
    <section css={S.imageSection}>
      <ImgMenu1 />
      <LikeButton isClicked={false} />
    </section>
    <section css={S.titleSection}>
      <p className="title__ko">{titleKo}</p>
      <p className="title__en">{titleEn}</p>
    </section>
  </div>
);

export default BurgerPost;
