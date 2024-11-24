import type { SVGProps } from 'react';
const SvgStatepressed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="gray" rx={12} />
    <path
      fill="#fff"
      d="m12 18.733-.966-.88c-3.433-3.113-5.7-5.173-5.7-7.686A3.627 3.627 0 0 1 9.001 6.5c1.16 0 2.273.54 3 1.387A4 4 0 0 1 15 6.5a3.627 3.627 0 0 1 3.666 3.667c0 2.513-2.266 4.573-5.7 7.686z"
    />
  </svg>
);
export default SvgStatepressed;
