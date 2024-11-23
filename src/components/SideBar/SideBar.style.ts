import { Theme, css } from '@emotion/react';

export const Wrapper = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 37.5rem;
  height: 100vh;
  z-index: 2;

  visibility: ${isOpen ? 'visible' : 'hidden'};
  transition: visibility 0s ${isOpen ? '0s' : '0.3s'};
`;

export const Container = (isOpen: boolean) => css`
  margin-left: ${isOpen ? '0' : '100%'};
  transition: margin-left 0.3s ease;
  width: 100%;
`;

export const CloseBtn = (theme: Theme) => css`
  display: flex;
  height: 6.2rem;
  margin-left: auto;
  background-color: ${theme.colors.white};
  border: none;
  cursor: pointer;
`;

export const MainList = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 3.1rem;
  overflow-y: scroll;
  height: calc(100vh - 6.2rem - 13.4rem);
  padding: 4.8rem 3rem 0;
  background-color: ${theme.colors.white};
`;

export const MainListTitle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid ${theme.colors.gray100};

  ${theme.fonts.title01};
  cursor: pointer;
`;

export const SubList =
  ({ isSubListOpen }: { isSubListOpen: boolean }) =>
  (theme: Theme) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2.9rem;

    overflow: hidden;
    max-height: ${isSubListOpen ? '30rem' : '0'};
    padding: ${isSubListOpen ? '1.5rem 0' : '0'};
    border-bottom: 1px solid ${theme.colors.gray100};
    border-bottom-width: ${isSubListOpen ? '1px' : '0'};
    transition:
      max-height 0.4s ease,
      padding 0.4s ease,
      border-bottom-width 0.4s ease;

    color: ${theme.colors.black};
    ${theme.fonts.title04};
    word-break: keep-all;

    li {
      cursor: pointer;
    }
  `;

export const BottomSection = css`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const SearchBox = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  height: 6.7rem;
  padding: 1.8rem 3.2rem;
  background: ${theme.colors.yellow02};

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: ${theme.colors.gray700};
    ${theme.fonts.body10};

    &::placeholder {
      color: ${theme.colors.gray700};
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const FooterBox = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 6.7rem;
  background: ${theme.colors.gray700};

  color: ${theme.colors.gray400};
  ${theme.fonts.body07};

  li {
    align-content: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
  }
`;
