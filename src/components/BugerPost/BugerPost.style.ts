import { css } from "@emotion/react";
import theme from "src/styles/theme";

export const postStyle = css`
  display: flex;
  width: 10.5625rem;
  height: 15.875rem;
  padding: 1.5rem 1.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  background-color:${theme.colors.green}
`;
