import { Theme, css } from '@emotion/react';

export const Banner = (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;

  h1 {
    position: absolute;
    left: 1.2rem;
    color: ${theme.colors.white};
    ${theme.fonts.headline01};
  }
`;
