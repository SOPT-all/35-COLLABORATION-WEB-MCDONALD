import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SideBar.style';
import { BtnAccordion, IcSearch } from '@assets/svgs/sidebar';
import { SIDEBAR_LIST } from '@constants/sidebarList';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 목록 페이지 이동
  const navList = () => {
    navigate('/list');
    toggleSidebar();
  };

  // 외부 화면 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav css={S.Wrapper}>
      <div css={S.Container(isOpen)}>
        <ul css={S.MainList}>
          {SIDEBAR_LIST.map((item, index) => (
            <li key={index}>
              <div css={S.MainListTitle} onClick={() => toggleSubMenu(index)}>
                <h2>{item.title}</h2>
                <BtnAccordion width={36.25} height={28.75} />
              </div>

              {item.subItems.length > 0 && (
                <ul css={S.SubList({ isSubListOpen: openIndex === index })}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={navList}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <section css={S.BottomSection}>
          <form css={S.SearchBox}>
            <input placeholder="검색어를 입력해주세요" />
            <IcSearch />
          </form>
          <ul css={S.FooterBox}>
            <li>ENG</li>
            <li>고객문의</li>
            <li>임차문의</li>
            <li>인재채용</li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default React.memo(SideBar);
