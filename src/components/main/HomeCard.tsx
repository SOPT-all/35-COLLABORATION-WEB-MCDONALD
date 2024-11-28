import React, { useEffect, useRef, useState } from 'react';
import * as S from './HomeCard.style';
import { calculateLine } from '@utils/calculateLine';

export interface HomeCardProps {
  img: React.ReactNode;
  title: string;
}

const HomeCard = ({ img, title }: HomeCardProps) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [isThreeLines, setIsThreeLines] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const isDataValid = img && title;

  useEffect(() => {
    if (titleRef.current) {
      const lines = calculateLine(titleRef.current);
      setIsThreeLines(lines >= 3);
      setIsCalculated(true);
    }
  }, [title]);
  console.log(isDataValid);

  return (
    <section css={S.CardStyle}>
      <div css={S.ImgStyle}>
        {isCalculated && isDataValid ? img : <div css={S.SkeletonImg} />}
      </div>
      <div
        css={
          isCalculated && isDataValid
            ? S.TitleStyle(isThreeLines)
            : S.SkeletonText
        }
      >
        <p ref={titleRef}>{title || 'skeleton'}</p>
      </div>
    </section>
  );
};

export default HomeCard;
