import { css } from '@emotion/react';

export const footerStyle = () => css`
  & form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 345px;
    height: 161px;
    max-width: 345px;
    margin: 33px 15px 430px 15px;
    align-items: center;
  }
`;
