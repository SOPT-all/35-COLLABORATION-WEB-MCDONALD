import HomeCard from '@components/main/HomeCard';
import { HOMECARD_LIST } from '@constants/main/homeCardList';
import * as S from './Main.style';
import Spacing from '@components/common/spacing/Spacing';
import { IcSeemore } from '@assets/svgs';
import Carousel from '@components/main/Carousel';
import { useNews } from '@apis/news/queries';
import { useEffect, useState } from 'react';
import { mergeNewsWithImages } from '@utils/mergeNewsWithImages';

const Main = () => {
  const [cursor, setCursor] = useState(0);
  const { data, isLoading } = useNews(cursor);
  const [articles, setArticles] = useState<
    { id: number; content: string; img: JSX.Element | null }[]
  >([]);

  useEffect(() => {
    if (data) {
      const merged = mergeNewsWithImages(data, HOMECARD_LIST);
      setArticles((prev) => [...prev, ...merged]);
    }
  }, [data]);

  const handleSeeMore = () => {
    const lastId = articles[articles.length - 1]?.id;
    if (lastId) {
      setCursor(lastId);
    }
  };

  return (
    <>
      <Carousel />
      <main css={S.MainLayout}>
        <h1 css={S.Title}>McDonald’s LIVE</h1>
        <Spacing size="2.2" />
        <article css={S.CardLayout}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <HomeCard key={`skeleton-${index}`} img={null} title={null} />
              ))
            : articles.map((card) => (
                <HomeCard key={card.id} img={card.img} title={card.content} />
              ))}
        </article>
        <Spacing size="6" />
        <IcSeemore width={70} height={70} onClick={handleSeeMore} />
      </main>
    </>
  );
};

export default Main;
