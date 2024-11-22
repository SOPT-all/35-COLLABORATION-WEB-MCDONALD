import { IcPlay, IcStop } from '@assets/svgs';
import * as S from './Progress.style';
import { useState } from 'react';

export interface ProgressProps {
  currentIndex: number;
}

const Progress = ({ currentIndex }: ProgressProps) => {
  const [isPlay, setIsPlay] = useState(true);

  const handlePlayStatus = () => {
    setIsPlay((prev) => !prev);
  };

  return (
    <div css={S.ProgressLayout}>
      {isPlay ? (
        <IcStop css={S.ButtonStyle} onClick={handlePlayStatus} />
      ) : (
        <IcPlay css={S.ButtonStyle} onClick={handlePlayStatus} />
      )}
      <div key={currentIndex} css={S.ProgressBar(isPlay)} />
    </div>
  );
};
export default Progress;
