import HomeCard from '@components/main/HomeCard';
import { HOMECARD_LIST } from '@constants/main/homeCardList';
import * as S from './Main.style';
import Spacing from '@components/common/spacing/Spacing';
import { IcSeemore } from '@assets/svgs';
import Carousel from '@components/main/Carousel';

const Main = () => (
  <>
    <Carousel />
    <main css={S.MainLayout}>
      <h1 css={S.Title}>McDonald’s LIVE</h1>
      <Spacing size="2.2" />
      <section css={S.CardLayout}>
        {HOMECARD_LIST.map((card) => (
          <HomeCard key={card.id} img={card.img} title={card.title} />
        ))}
      </section>
      <Spacing size="6" />
      <IcSeemore width={70} height={70} />
    </main>
  </>
);

export default Main;
