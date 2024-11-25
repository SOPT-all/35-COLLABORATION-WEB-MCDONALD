import { css, Theme } from '@emotion/react';

export const MainLayout = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.5rem 0 7rem;
`;

export const Title = (theme: Theme) => css`
  color: ${theme.colors.gray700};
  ${theme.fonts.title02};
`;

export const CardLayout = () => css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem 1.3rem;
  flex-wrap: wrap;
`;
