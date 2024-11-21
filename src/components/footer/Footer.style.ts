import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const footerStyle = (theme: Theme) => css`
  width: 375px;
  height: 624px;
  background-color: ${theme.colors.gray700};

  & form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 345px;
    height: 161px;
    max-width: 345px;
    margin: 3.3rem 1.5rem 43rem 1.5rem;
    align-items: center;
    border-bottom: 0.1rem solid ${theme.colors.gray500};
    ${theme.fonts.body09}
  }

  & form .highlightMenu {
    color: ${theme.colors.yellow01};
  }

  & form div {
    width: 17.2rem;
    height: 3.6rem;
    padding: 0.775rem 0;
    color: ${theme.colors.white};
  }

  &form .bottomMenu {
    margin-bottom: 1.4rem;
  }
`;
