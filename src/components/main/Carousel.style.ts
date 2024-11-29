import { css } from '@emotion/react';

export const CarouselLayout = () => css`
  position: relative;

  width: 100%;
`;

export const CarouselStyle = (isInitialized: boolean) => css`
  display: flex;
  overflow: hidden;
  visibility: ${isInitialized ? 'visible' : 'hidden'};
`;

export const CarouselItemStyle = () => css`
  flex: 0 0 auto;

  width: 100%;

  svg {
    width: inherit;
  }
`;

export const ButtonStyle = (position: string) => css`
  position: absolute;
  top: 50%;
  ${position}: 0;
  width: 3rem;
  height: 3rem;

  transform: translateY(-50%);
  cursor: pointer;
`;
