import { Theme, css } from '@emotion/react';

export const ListSection = () => css`
  padding: 0 1.5rem 7rem;
`;

export const Banner = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: 37.5rem;
  height: 16.6rem;
  background: ${theme.colors.Blackgrad};
  .banner__title {
    position: absolute;
    left: 1.2rem;
    color: ${theme.colors.white};
    ${theme.fonts.headline01};
  }
`;

export const ProductCount = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3.8rem;
  color: ${theme.colors.gray700};
  ${theme.fonts.title06};
`;

export const PostGrid = () => css`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
