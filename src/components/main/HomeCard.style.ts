import { css, Theme } from '@emotion/react';

export const CardStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 16.6rem;
  height: 21.4rem;

  border-radius: 4px;
  border: 1px solid ${theme.colors.gray100};

  ${theme.boxShadows.Shadow01};
`;

export const ImgStyle = () => css`
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 13.3rem;

  overflow: hidden;

  svg {
    object-fit: content;
  }
`;

export const TitleStyle = () => css``;
