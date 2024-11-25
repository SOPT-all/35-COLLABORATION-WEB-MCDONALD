import { css, Theme } from '@emotion/react';

export const titleStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  padding-top: 12.7rem;

  .korean {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* gap: 0.2rem; */
    ${theme.fonts.headline02}
    color: ${theme.colors.gray700};
    text-align: center;
    z-index: 2;
  }

  .english {
    display: flex;
    justify-content: center;
    ${theme.fonts.title05}
    color: ${theme.colors.gray500};
    z-index: 2;
  }
`;

export const imgContainer = css`
  /* position: relative; */
`;

export const ellipse = css`
  display: flex;
  position: absolute;
  left: 4rem;
  top: 19.2rem;
  width: 25.1rem;
  z-index: 1;
`;

export const burgerImg = css`
  display: flex;
  position: relative;
  /* top: 29.5rem; */
  width: 34.6rem;
  margin: 0 auto;
  /* height: 25.4rem; */
  /* padding-top: 3.8rem; */
  z-index: 2;
`;

// Export const container = css`
//   width: 34.3rem;
// `;

export const info = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 26.7rem;
  margin: 0 auto;
  padding-top: 2rem;
  gap: 2rem;
  ${theme.fonts.body05}
  color: ${theme.colors.gray500};
  text-align: center;
`;

export const nutrition = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 7.2rem;
  margin: 0 auto;

  .toggle1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem 0 1.8rem;
  }

  h4 {
    display: flex;
    align-items: center;
    height: 8rem;
    ${theme.fonts.title03}
    color: ${theme.colors.gray700};
  }

  .icPlus {
    width: 2.4rem;
    height: 2.4rem;
  }

  .icMinus {
    width: 2.4rem;
    height: 2.4rem;
  }

  .table {
    display: flex;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .table.active {
    max-height: 62.8rem; /* 적절한 크기 설정 */
  }

  & table {
    display: flex;
    flex-direction: column;
    width: 34.3rem;
    align-items: center;
    ${theme.fonts.body03}
    color: ${theme.colors.black};
  }

  & tr {
    display: flex;
    padding: 2.05rem 0;
  }
`;

export const allergy = (theme: Theme) => css`
  width: 34.3rem;

  h4 {
    display: flex;
    align-items: center;
    height: 8rem;
    padding: 0 0.4rem 0 1.8rem;
    ${theme.fonts.title03}
    color: ${theme.colors.gray700};
  }

  .entireText {
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    gap: 2rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .first {
    ${theme.fonts.body06}
  }

  .second {
    ${theme.fonts.body06}
    color: ${theme.colors.gray500};
  }

  .third {
    ${theme.fonts.body09}
  }
`;

export const origin = (theme: Theme) => css`
  padding-bottom: 7rem;

  h4 {
    display: flex;
    align-items: center;
    height: 8rem;
    padding: 0 0.4rem 0 1.8rem;
    ${theme.fonts.title03}
    color: ${theme.colors.gray700};
  }

  p {
    padding-top: 2.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;
