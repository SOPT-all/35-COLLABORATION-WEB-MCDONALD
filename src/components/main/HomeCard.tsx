import * as S from './HomeCard.style';

export interface HomeCardProps {
  img: React.ReactNode;
  title: string;
}

const HomeCard = ({ img, title }: HomeCardProps) => (
  <section css={S.CardStyle}>
    <div css={S.ImgStyle}>{img}</div>
    <div css={S.TitleStyle}> {title}</div>
  </section>
);

export default HomeCard;
