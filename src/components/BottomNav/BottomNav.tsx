import { useState, useEffect, useCallback, useRef } from 'react';
import * as S from './BottomNav.style';
import { IcDeliver, IcLocation } from '@assets/svgs/detail';

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const lastScrollY = useRef(0); // 스크롤 위치 저장

  // 스크롤 방향 감지 함수
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsOpen(currentScrollY > lastScrollY.current);
    lastScrollY.current = currentScrollY;
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav css={S.Container(isOpen)}>
      <a css={S.NavLinkBox()}>
        <IcDeliver width={24} height={24} />
        <span>맥딜리버리</span>
      </a>
      <a css={S.NavLinkBox('green')}>
        <IcLocation width={24} height={24} />
        <span>매장찾기</span>
      </a>
    </nav>
  );
};

export default BottomNav;
