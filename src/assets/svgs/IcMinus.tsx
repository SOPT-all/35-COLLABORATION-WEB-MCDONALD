import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g clipPath="url(#ic_minus_svg__a)">
      <path stroke="#000" d="M1.5 11.5h23" />
    </g>
    <defs>
      <clipPath id="ic_minus_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcMinus;
