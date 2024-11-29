import { useState } from 'react';
import { BtnDisabled } from '@assets/svgs/likeButton';
import * as S from './LikeButton.style';
import { useAddFavorite } from '@apis/favorites/queries';
type LikeButtonProps = {
  id: number;
  liked: boolean;
};

const LikeButton = ({ id, liked }: LikeButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(liked);
  const [isPressed, setIsPressed] = useState(false);
  const addFavoriteMutation = useAddFavorite();

  const toggleFavorite = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      setIsFavorite((prev) => !prev);
    }, 150);

    addFavoriteMutation.mutate(id);
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
      {isPressed ? (
        <BtnDisabled
          css={S.LikeButton}
          rectFill="gray"
          pathFill="#fff"
          stroke="none"
        />
      ) : isFavorite ? (
        <BtnDisabled
          css={S.LikeButton}
          rectFill="#fff"
          pathFill="#DB0006"
          stroke="none"
        />
      ) : (
        <BtnDisabled css={S.LikeButton} rectFill="#fff" pathFill="none" />
      )}
    </div>
  );
};

export default LikeButton;
