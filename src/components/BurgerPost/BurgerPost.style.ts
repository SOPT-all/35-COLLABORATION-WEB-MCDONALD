import { Theme, css } from '@emotion/react';

export const postStyleContainer = (theme: Theme) => css`
  display: flex;
  width: 100%;
  max-width: 16.9rem;
  height: 25.4rem;
  padding: 2.4rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${theme.colors.gray000};
`;

export const imageSection = css`
  position: relative;
  display: flex;
  height: 11rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const titleSection = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-self: stretch;
  text-align: center;
  .title__ko {
    color: ${theme.colors.gray600};
    ${theme.fonts.body04};
  }
  .title__en {
    color: ${theme.colors.gray500};
    ${theme.fonts.caption01};
  }
`;
