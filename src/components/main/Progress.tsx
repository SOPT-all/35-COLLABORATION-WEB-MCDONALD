import { IcPlay, IcStop } from '@assets/svgs/carousel';
import * as S from './Progress.style';
import { useEffect, useRef, useState } from 'react';

export interface ProgressProps {
  currentIndex: number;
  handleScroll: (direction: 'left' | 'right') => void;
}

const Progress = ({ currentIndex, handleScroll }: ProgressProps) => {
  const [isPlay, setIsPlay] = useState(true);
  const workerRef = useRef<Worker | null>(null);

  const handlePlayStatus = () => {
    setIsPlay((prev) => !prev);
  };

  useEffect(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker(
        new URL('./../../utils/timerWorker.js', import.meta.url),
      );
    }

    const worker = workerRef.current;

    if (isPlay) {
      worker.postMessage('start');
      worker.onmessage = (e) => {
        if (e.data === 'next') {
          handleScroll('right');
          worker.postMessage('start');
        }
      };
    } else {
      worker.postMessage('stop');
    }

    return () => {
      worker.postMessage('close');
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, [isPlay, handleScroll]);

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
