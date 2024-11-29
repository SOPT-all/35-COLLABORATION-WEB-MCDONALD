import { Theme, css } from '@emotion/react';

export const Section = () => css`
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

export const ListEndView = () => css`
  width: 100%;
  height: 2rem;
`;
