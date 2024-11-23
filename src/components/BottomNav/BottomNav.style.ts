import { Theme, css } from '@emotion/react';

export const Container = (isOpen: boolean) => (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: fixed;
  bottom: ${isOpen ? '0' : '-6.2rem'};
  transition: bottom 0.3s ease-in-out;
  width: 37.5rem;
  height: 6rem;
  background-color: ${theme.colors.white};
  z-index: 1;
`;

export const NavLinkBox =
  (bgColor: string = '') =>
  (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    height: 100%;
    background-color: ${bgColor === 'green'
      ? theme.colors.green
      : theme.colors.red02};

    color: ${theme.colors.white};
    ${theme.fonts.body01}
    cursor: pointer;
  `;
