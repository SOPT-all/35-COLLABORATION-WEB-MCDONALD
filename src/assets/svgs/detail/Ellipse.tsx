import type { SVGProps } from 'react';
const SvgEllipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 251 251"
    {...props}
  >
    <circle cx={125.5} cy={125.5} r={125.5} fill="#F8F8F8" />
  </svg>
);
export default SvgEllipse;
