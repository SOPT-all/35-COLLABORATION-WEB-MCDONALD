import { css, Theme } from '@emotion/react';

export const titleStyle = (theme: Theme) => css`
  display: flex;
  gap: 6.5rem 0 0 0;
  height: 100dvh;

  .korean {
    display: block;
    ${theme.fonts.headline02}
    color: ${theme.colors.gray700};
  }
`;
