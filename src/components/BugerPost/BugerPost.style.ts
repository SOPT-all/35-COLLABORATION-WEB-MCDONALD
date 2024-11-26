import { Theme, css } from '@emotion/react';
import theme from 'src/styles/theme';

export const postStyleContainer = (theme: Theme) => css`
  display: flex;
  width: 16.9rem;
  height: 25.4rem;
  padding: 2.4rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: ${theme.colors.gray000};
`;
export const imageSection = css`
  display: flex;
  height: 11rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

export const titleSection = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  .title__ko {
    color: ${theme.colors.gray600};
    text-align: center;
    ${theme.fonts.body04};
  }
  .title__en {
    color: ${theme.colors.gray500};
    ${theme.fonts.caption01};
  }
`;