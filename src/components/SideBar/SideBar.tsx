import React, { useState, useEffect } from 'react';
import * as S from './SideBar.style';
import { BtnAccordion, BtnX, IcSearch } from '@assets/svgs';
import { SIDEBAR_LIST } from '@constants/sidebarList';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <div css={S.Wrapper(isOpen)}>
      <div css={S.Container(isOpen)}>
        <button css={S.CloseBtn}>
          <BtnX onClick={toggleSidebar} width={62} height={62} />
        </button>

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
                    <li key={subIndex}>{subItem}</li>
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
    </div>
  );
};

export default React.memo(SideBar);
