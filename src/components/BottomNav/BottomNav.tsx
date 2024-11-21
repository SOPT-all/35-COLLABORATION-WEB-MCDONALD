import { useState, useEffect } from 'react';
import * as S from './BottomNav.style';
import { IcDeliver, IcLocation } from '@assets/svgs';

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 스크롤 방향 감지 함수
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    currentScrollY > lastScrollY ? setIsOpen(true) : setIsOpen(false);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
