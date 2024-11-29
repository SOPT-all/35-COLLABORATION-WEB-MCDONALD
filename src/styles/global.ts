import { css, Theme } from '@emotion/react';

import Reset from './reset';

const GlobalStyle = (theme: Theme) => css`
  ${Reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${theme.colors.white};
    font-size: 62.5%;
  }

  #root {
    position: relative;
    max-width: 425px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
