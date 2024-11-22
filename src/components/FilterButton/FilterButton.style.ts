import { Theme, css } from '@emotion/react';

export const ButtonContainer =
  (isHighlighted: boolean) => (theme: Theme) => css`
    display: flex;
    padding: 0.8rem 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.red01};
    color: ${isHighlighted ? theme.colors.white : theme.colors.red02};
    ${theme.fonts.body09};
    background-color: ${isHighlighted
      ? theme.colors.red02
      : theme.colors.white};
  `;
