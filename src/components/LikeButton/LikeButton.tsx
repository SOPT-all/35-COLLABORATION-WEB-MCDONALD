import { useState } from 'react';
import { BtnHeart, BtnDisabled } from '@assets/svgs/likeButton';
import * as S from './LikeButton.style';

type LikeButtonProps = {
  isClicked?: boolean;
};

const LikeButton = ({ isClicked = false }: LikeButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(isClicked);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
      {isFavorite ? (
        <BtnHeart css={S.LikeButton} />
      ) : (
        <BtnDisabled css={S.LikeButton} />
      )}
    </div>
  );
};

export default LikeButton;
