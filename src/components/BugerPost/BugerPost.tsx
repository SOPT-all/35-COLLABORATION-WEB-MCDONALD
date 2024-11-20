/** @jsxImportSource @emotion/react */
import React from "react";
import { postStyle } from "./BugerPost.style";

type Props = {
  title: string;
};

const BurgerPost = ({ title }: Props) => {
  return (
    <div css={postStyle}>
      <h1>{title}</h1>
    </div>
  );
};

export default BurgerPost;
