import { Theme, css } from '@emotion/react';

export const Banner = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: 37.5rem;
  height: 16.6rem;
  flex-shrink: 0;
  background: var(--Blackgrad, rgba(0, 0, 0, 0.5));
  .banner__title {
    position: absolute;
    left: 1.2rem;
    color: ${theme.colors.white};
    ${theme.fonts.headline01};
  }
`;
