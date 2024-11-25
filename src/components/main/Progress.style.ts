import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const ProgressLayout = () => css`
  position: absolute;
  bottom: 3.1rem;
  left: 8.1rem;
  right: 8.4rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
`;

export const ButtonStyle = () => css`
  width: 2.5rem;
  cursor: pointer;
`;

export const ProgressBar = (isPlay: boolean) => (theme: Theme) => css`
  position: relative;
  width: 17.4rem;
  height: 0.4rem;
  border-radius: 2px;
  background-color: ${theme.colors.white};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${theme.colors.yellow02};
    border-radius: 2px;

    animation: ${isPlay ? 'fill 5s linear forwards;' : 'none'};
  }

  @keyframes fill {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
