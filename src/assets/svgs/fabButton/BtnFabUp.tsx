import type { SVGProps } from 'react';
const SvgBtnFabUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 51 50"
    {...props}
  >
    <rect width={50} height={50} x={0.5} fill="#292929" rx={25} />
    <path
      stroke="#fff"
      strokeWidth={2}
      d="M25.5 17.5v15m0-15-6 6.5m6-6.5 6 6.5"
    />
  </svg>
);
export default SvgBtnFabUp;
