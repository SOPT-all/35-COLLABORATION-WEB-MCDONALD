import { Theme, css } from '@emotion/react';

export const Wrapper = () => css`
  display: flex;
  flex-direction: column;
`;

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

export const CategoryTab = (theme: Theme) => css`
  display: flex;
  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  gap: 2.5rem;
  border-bottom: 1px solid ${theme.colors.gray200};
  color: ${theme.colors.gray500};
  ${theme.fonts.body02};

  li {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }

  li.selected {
    color: ${theme.colors.red01};
    border-bottom: 1px solid ${theme.colors.red01};
  }
`;

export const ListSection = () => css`
  padding: 0 1.5rem 7rem;
`;

export const ProductCount = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3.8rem;
  color: ${theme.colors.gray700};
  ${theme.fonts.title06};
`;

export const ProductFilterTab = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  margin: 2rem 0;
`;

export const ProductGrid = () => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
