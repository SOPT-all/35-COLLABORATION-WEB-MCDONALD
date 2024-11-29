import * as S from './BurgerPost.style';
import LikeButton from '@components/LikeButton/LikeButton';
import { PRODUCT_LIST } from '@constants/productList';

type BurgerPostProps = {
  burgerData: {
    id: number;
    burgerName: string;
    burgerNameEng: string;
    isLike?: boolean;
    liked?: boolean;
  };
};

const BurgerPost = ({ burgerData }: BurgerPostProps) => {
  const BurgerImg = PRODUCT_LIST[burgerData.id];

  return (
    <div css={S.postStyleContainer}>
      <section css={S.imageSection}>
        {BurgerImg ? <BurgerImg /> : <></>}
        <LikeButton isClicked={false} />
      </section>
      <section css={S.titleSection}>
        <p className="title__ko">{burgerData.burgerName}</p>
        <p className="title__en">{burgerData.burgerNameEng}</p>
      </section>
    </div>
  );
};

export default BurgerPost;
