import { css, Theme } from '@emotion/react';

export const CardStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 16.6rem;

  border-radius: 4px;
  border: 1px solid ${theme.colors.gray100};
  overflow: hidden;

  ${theme.boxShadows.Shadow01};
`;

export const ImgStyle = () => css`
  width: inherit;
  height: 13.3rem;
  margin: -0.1rem;

  overflow: hidden;
`;

export const TitleStyle = (isThreeLines: boolean) => (theme: Theme) => css`
  width: inherit;
  padding: ${isThreeLines ? '1.5rem' : '1.8rem'} 2rem
    ${isThreeLines ? '1.5rem' : '1.8rem'} 1.5rem;

  p {
    display: block;
    width: 13.1rem;
    height: fit-content;

    color: ${theme.colors.gray500};
    ${theme.fonts.title07};
    overflow: auto;
  }
`;
