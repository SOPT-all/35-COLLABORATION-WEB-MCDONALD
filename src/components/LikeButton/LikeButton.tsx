import { useState } from 'react';
import { BtnDisabled } from '@assets/svgs/likeButton';
import * as S from './LikeButton.style';
import { useAddFavorite } from '@apis/favorites/queries';

type LikeButtonProps = {
  id: number;
  liked: boolean;
};

const LikeButton = ({ id, liked }: LikeButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const addFavoriteMutation = useAddFavorite();

  const toggleFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (isProcessing) return;

    setIsProcessing(true);

    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);

    addFavoriteMutation.mutate(id, {
      onSettled: () => {
        setIsProcessing(false);
      },
    });
  };

  return (
    <div
      onClick={toggleFavorite}
      style={{
        cursor: isProcessing ? 'not-allowed' : 'pointer',
        pointerEvents: isProcessing ? 'none' : 'auto',
      }}
    >
      {isPressed ? (
        <BtnDisabled
          css={S.LikeButton}
          rectFill="gray"
          pathFill="#fff"
          stroke="none"
        />
      ) : liked ? (
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
