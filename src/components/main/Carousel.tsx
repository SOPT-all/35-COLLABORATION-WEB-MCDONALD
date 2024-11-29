import { useRef, useEffect, useState } from 'react';
import { IcNext, IcPrev } from '@assets/svgs';
import * as S from './Carousel.style';
import { CAROUSEL_LIST } from '@constants/main/mcLiveList';
import Progress from './Progress';

const Carousel = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // 무한 캐러셀 배열
  const infiniteCarousel = [
    CAROUSEL_LIST[CAROUSEL_LIST.length - 1],
    ...CAROUSEL_LIST,
    CAROUSEL_LIST[0],
  ];

  // 초기 위치 설정
  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: scrollWidth,
        behavior: 'auto',
      });

      setTimeout(() => {
        setIsInitialized(true);
      }, 0);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const scrollWidth = containerRef.current.offsetWidth;
    const carouselCount = CAROUSEL_LIST.length;
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    containerRef.current.scrollTo({
      left: (newIndex + 1) * scrollWidth,
      behavior: 'smooth',
    });

    setTimeout(() => {
      if (newIndex === -1) {
        setCurrentIndex(carouselCount - 1);
        containerRef.current?.scrollTo({
          left: carouselCount * scrollWidth,
          behavior: 'auto',
        });
      } else if (newIndex === carouselCount) {
        setCurrentIndex(0);
        containerRef.current?.scrollTo({
          left: scrollWidth,
          behavior: 'auto',
        });
      } else {
        setCurrentIndex(newIndex);
      }
    }, 500);
  };

  return (
    <section css={S.CarouselLayout}>
      <IcPrev
        css={S.ButtonStyle('left')}
        onClick={() => handleScroll('left')}
      />
      <ul css={S.CarouselStyle(isInitialized)} ref={containerRef}>
        {infiniteCarousel.map((item, index) => (
          <li key={`${item.id}-${index}`} css={S.CarouselItemStyle}>
            {item.img}
          </li>
        ))}
      </ul>
      <IcNext
        css={S.ButtonStyle('right')}
        onClick={() => handleScroll('right')}
      />
      <Progress currentIndex={currentIndex} handleScroll={handleScroll} />
    </section>
  );
};

export default Carousel;
