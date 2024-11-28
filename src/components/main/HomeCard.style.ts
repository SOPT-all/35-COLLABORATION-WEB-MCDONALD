import { css, keyframes, Theme } from '@emotion/react';

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

export const SkeletonImg = (theme: Theme) => css`
  width: inherit;
  height: 13.3rem;

  background: linear-gradient(
    90deg,
    ${theme.colors.gray100} 0%,
    ${theme.colors.gray200} 50%,
    ${theme.colors.gray100} 100%
  );
  background-size: 10rem;
  animation: ${shimmer} 1.5s infinite;
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
    word-break: keep-all;
  }
`;

export const SkeletonText = (theme: Theme) => css`
  width: 100%;
  height: 7rem;
  padding: 1.8rem 2rem 1.8rem 1.5rem;

  p {
    position: relative;
    display: block;
    width: 13.1rem;
    height: fit-content;
    min-height: 1.8rem;

    color: transparent;
    ${theme.fonts.title07};
    overflow: auto;
  }

  p::after {
    content: 'dd';
    position: absolute;
    top: 0;
    left: 0;
    width: 13.1rem;
    height: 1.8rem;

    background: linear-gradient(
      90deg,
      ${theme.colors.gray100} 0%,
      ${theme.colors.gray200} 50%,
      ${theme.colors.gray100} 100%
    );
    background-size: 10rem;
    border-radius: 8px;

    animation: ${shimmer} 1s infinite;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -10rem;
  }
  100% {
    background-position: calc(10rem + 100%);
  }
`;
