import type { SVGProps } from 'react';
const SvgListStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 4 4"
    {...props}
  >
    <circle cx={2} cy={2} r={2} fill="#F5BD44" />
  </svg>
);
export default SvgListStyle;
