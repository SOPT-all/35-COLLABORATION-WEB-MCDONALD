import { Theme, css } from '@emotion/react';

export const HeaderContainer = (isLine: boolean) => (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  max-width: 42.5rem;
  width: 100%;
  height: 6.2rem;
  box-sizing: content-box;
  background-color: ${theme.colors.white};
  border-bottom: ${isLine ? `1px solid ${theme.colors.gray100}` : 'none'};
  transition: border-bottom 0.3s ease;
  z-index: 4;

  svg {
    cursor: pointer;
  }
`;

export const BackNav = (theme: Theme) => css`
  display: flex;
  gap: 1.8rem;
  margin-left: 2.4rem;
  ${theme.fonts.body06};
  cursor: pointer;
`;
