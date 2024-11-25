import { useState } from 'react';
import { BtnHeart, BtnDisabled, BtnPressed } from '@assets/svgs/likeButton';
import * as S from './LikeButton.style';

type LikeButtonProps = {
  isClicked?: boolean;
};

const LikeButton = ({ isClicked = false }: LikeButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(isClicked);
  const [isPressed, setIsPressed] = useState(false);

  const toggleFavorite = () => {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
      setIsFavorite((prev) => !prev);
    }, 150);
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
      {isPressed ? (
        <BtnPressed css={S.LikeButton} />
      ) : isFavorite ? (
        <BtnHeart css={S.LikeButton} />
      ) : (
        <BtnDisabled css={S.LikeButton} />
      )}
    </div>
  );
};

export default LikeButton;
