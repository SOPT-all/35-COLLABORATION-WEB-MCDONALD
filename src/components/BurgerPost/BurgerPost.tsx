import { ImgMenu1 } from '@assets/svgs/buger';
import {
  postStyleContainer,
  titleSection,
  imageSection,
} from './BugerPost.style';
import { ThemeProvider } from '@emotion/react';
import theme from 'src/styles/theme';

type BugerPostProps = {
  titleKo: string;
  titleEn: string;
};

const BurgerPost = ({ titleEn, titleKo }: BugerPostProps) => (
  <ThemeProvider theme={theme}>
    <div css={postStyleContainer}>
      <section css={imageSection}>
        <ImgMenu1 />
      </section>
      <section css={titleSection}>
        <p className="title__ko">{titleKo}</p>
        <p className="title__en">{titleEn}</p>
      </section>
    </div>
  </ThemeProvider>
);

export default BurgerPost;
