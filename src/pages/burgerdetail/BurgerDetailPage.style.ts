import { css, Theme } from '@emotion/react';

export const titleStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  padding-top: 12.7rem;

  .korean {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-wrap: wrap;
    ${theme.fonts.headline02}
    color: ${theme.colors.gray700};
    text-align: center;
    z-index: 2;

    span {
      height: 4rem;
    }
  }

  .english {
    display: flex;
    justify-content: center;
    align-items: end;
    ${theme.fonts.title05}
    color: ${theme.colors.gray500};
    z-index: 2;

    span {
      height: 2.5rem;
    }
  }
`;

export const ellipse = css`
  position: absolute;
  left: 4rem;
  top: 19.2rem;
  width: 25.1rem;
  z-index: 1;
`;

export const burgerImg = css`
  display: flex;
  position: relative;
  top: 3.8rem;
  width: 34.6rem;
  margin: 0 auto;
  z-index: 2;
`;

export const info = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 26.7rem;
  margin: 0 auto;
  padding-top: 4rem;
  gap: 2rem;
  ${theme.fonts.body05}
  color: ${theme.colors.gray500};
  text-align: center;
`;

export const questionStyle = () => css`
  cursor: pointer;
`;

export const nutrition = (theme: Theme) => css`
  padding-top: 7.2rem;

  .nutritionQuestion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem 0 1.8rem;
    border-bottom: 1px solid ${theme.colors.gray700};
  }

  h4 {
    display: flex;
    align-items: center;
    height: 8rem;
    ${theme.fonts.title03}
    color: ${theme.colors.gray700};
  }

  .nutritionAnswer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .nutritionAnswer.active {
    max-height: 62.8rem;
  }

  table {
    width: 100%;
    ${theme.fonts.body03}
    color: ${theme.colors.black};
    text-align: center;
  }

  tr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  td {
    padding: 2.05rem 0;
    border-bottom: 1px solid ${theme.colors.gray200};
  }

  th {
    padding: 2.05rem 0;
    border-bottom: 1px solid ${theme.colors.gray700};
  }
`;

export const allergy = (theme: Theme) => css`
  .allergyQuestion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem 0 1.8rem;
    border-bottom: 1px solid ${theme.colors.gray700};
  }

  h4 {
    display: flex;
    align-items: center;
    height: 8rem;
    ${theme.fonts.title03}
    color: ${theme.colors.gray700};
  }

  .allergyAnswer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 32.6rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .allergyAnswer.active {
    max-height: 20.1rem;
  }

  .first {
    padding-top: 2.5rem;
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

  .originQuestion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem 0 1.8rem;
    border-bottom: 1px solid ${theme.colors.gray700};
  }

  h4 {
    display: flex;
    align-items: center;
    height: 8rem;
    ${theme.fonts.title03}
    color: ${theme.colors.gray700};
  }

  .originAnswer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    ${theme.fonts.body06}
  }

  .originAnswer.active {
    max-height: 12.3rem;
  }

  p {
    padding-top: 2.5rem;
  }
`;
