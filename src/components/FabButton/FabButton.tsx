import { useEffect, useState } from 'react';
import * as S from './FabButton.style';
import BtnFabUp from '@assets/svgs/fabButton/BtnFabUp';

const FabButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerRect = footer?.getBoundingClientRect();

      // Footer가 보이면 버튼을 숨김
      if (footerRect) {
        setIsVisible(footerRect.top >= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div css={S.buttonStyle(Number(isVisible))} onClick={scrollToTop}>
      <BtnFabUp width={50} height={50} />
    </div>
  );
};

export default FabButton;
