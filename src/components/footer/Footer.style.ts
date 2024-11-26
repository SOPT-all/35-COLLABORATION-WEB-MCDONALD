import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const footerStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translateY(-100%);
  width: 37.5rem;
  height: 62.4rem;
  padding: 0 1.5rem;
  background-color: ${theme.colors.gray700};

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 34.5rem;
    height: 16.1rem;
    max-width: 34.5rem;
    margin-top: 3.3rem;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.gray500};
  }

  ul li {
    width: 17.2rem;
    height: 3.6rem;
    padding: 0.775rem 0;
    ${theme.fonts.body09}
    color: ${theme.colors.white};
  }

  ul .highlightMenu {
    color: ${theme.colors.yellow01};
  }

  ul .bottomMenu {
    margin-bottom: 1.4rem;
  }

  .middle {
    display: flex;
    flex-direction: column;
    width: 34.5rem;
    padding: 3rem 0;
    border-bottom: 1px solid ${theme.colors.gray500};
    align-items: flex-start;
  }

  .middle p {
    padding-top: 0.1rem;
    padding-bottom: 0.2rem;
    ${theme.fonts.body08}
    color: ${theme.colors.gray300};
  }

  .copyright {
    padding: 3rem 15.6rem 0 0;
    ${theme.fonts.body11}
    color: ${theme.colors.gray300};
  }

  .bottom {
    display: flex;
    gap: 1.7rem;
  }

  .imgFooterIsms {
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }

  .bottomRight {
    display: flex;
    flex-direction: column;
    width: 26.8rem;
    ${theme.fonts.body11}
    color: ${theme.colors.white};
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.8rem 0.8rem 0 0.9rem;
    gap: 3.1rem;
  }
`;

export const buttonStyle = css`
  position: fixed;
  bottom: 56rem;
  left: calc(50% + 12.15rem);
`;
