import { Theme, css, keyframes } from '@emotion/react';

const loadingAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

export const Box = (theme: Theme) => css`
  background: linear-gradient(
    120deg,
    ${theme.colors.gray000} 30%,
    #f2f2f2 38%,
    #f2f2f2 40%,
    ${theme.colors.gray000} 50%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${loadingAnimation} 1s infinite;
`;
