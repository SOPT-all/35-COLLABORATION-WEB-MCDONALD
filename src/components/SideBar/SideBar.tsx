import { useState, useEffect } from 'react';
import * as S from './SideBar.style';
import { BtnAccordion, BtnX, IcSearch } from '@assets/svgs';

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
      <button css={S.CloseBtn}>
        <BtnX onClick={toggleSidebar} width={62} height={62} />
      </button>

      <ul css={S.MainList}>
        {listData.map((item, index) => (
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
  );
};

export default SideBar;

const listData = [
  {
    title: 'Menu',
    subItems: [
      '버거',
      '맥런치',
      '맥모닝',
      '해피 스낵',
      '사이드&디저트',
      '맥카페&음료',
      '해피밀',
    ],
  },
  {
    title: 'Store',
    subItems: ['매장찾기', '맥드라이브', '맥딜리버리', '임차문의'],
  },
  {
    title: "What's New",
    subItems: ['프로모션', '새로운 소식', '이달의 해피밀'],
  },
  {
    title: 'Brand Story',
    subItems: ['스토리', '브랜드소개', '맥도날드 사람들', '사회적 책임과 지원'],
  },
  {
    title: 'Food Quality Story',
    subItems: [],
  },
];
