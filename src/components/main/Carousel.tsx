import { useState, useRef } from 'react';
import { Cimg1, IcNext, IcPrev } from '@assets/svgs';
import * as S from './Carousel.style';
import { carousel } from '@constants/main/mcLiveList';

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      const newIndex =
        direction === 'left'
          ? (currentIndex - 1 + carousel.length) % carousel.length
          : (currentIndex + 1) % carousel.length;
      setCurrentIndex(newIndex);
      containerRef.current.scrollTo({
        left: newIndex * scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div css={S.CarouselLayout}>
      <IcPrev
        css={S.ButtonStyle('left')}
        onClick={() => handleScroll('left')}
      />
      <div css={S.CarouselStyle} ref={containerRef}>
        {carousel.map((item) => (
          <div key={item.id} css={S.CarouselItemStyle}>
            {item.img}
          </div>
        ))}
      </div>
      <IcNext
        css={S.ButtonStyle('right')}
        onClick={() => handleScroll('right')}
      />
    </div>
  );
};

export default Carousel;
