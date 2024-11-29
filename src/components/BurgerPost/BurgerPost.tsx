import LikeButton from '@components/LikeButton/LikeButton';
import * as S from './BurgerPost.style';
import { PRODUCT_LIST } from '@constants/productList';

type BurgerPostProps = {
  burgerData: {
    id: number;
    burgerName: string;
    burgerNameEng: string;
    isLike?: boolean;
    liked?: boolean;
  };
  navDetail: (id: number) => void;
};

const BurgerPost = ({ burgerData, navDetail }: BurgerPostProps) => {
  const BurgerImg = PRODUCT_LIST[burgerData.id];

  return (
    <div css={S.postStyleContainer} onClick={() => navDetail(burgerData.id)}>
      <section css={S.imageSection}>
        {BurgerImg ? <BurgerImg /> : <></>}
        <LikeButton
          id={burgerData.id}
          liked={burgerData.liked ?? burgerData.isLike ?? false}
        />{' '}
      </section>
      <section css={S.titleSection}>
        <p className="title__ko">{burgerData.burgerName}</p>
        <p className="title__en">{burgerData.burgerNameEng}</p>
      </section>
    </div>
  );
};

export default BurgerPost;
