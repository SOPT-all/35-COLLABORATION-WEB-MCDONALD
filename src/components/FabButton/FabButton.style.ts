import { css } from '@emotion/react';

export const buttonStyle = (isVisible: number) => css`
  position: fixed;
  bottom: 7.5rem;
  left: calc(50% + 12.15rem);
  opacity: ${isVisible};
`;
