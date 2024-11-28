import { Theme, css } from '@emotion/react';

export const Container = (theme: Theme) => css`
  display: flex;
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
