import type { SVGProps } from 'react';
const SvgBtnDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#fff" fillOpacity={0.8} rx={12} />
    <path
      stroke="#B2B2B2"
      d="M11.37 17.484v-.001c-1.727-1.566-3.12-2.831-4.086-4.014-.962-1.177-1.45-2.21-1.45-3.302C5.834 8.383 7.223 7 9.001 7a3.5 3.5 0 0 1 2.62 1.212l.38.442.38-.442A3.5 3.5 0 0 1 15 7c1.777 0 3.166 1.383 3.166 3.167 0 1.092-.488 2.125-1.45 3.302-.966 1.183-2.36 2.448-4.086 4.014l-.63.574z"
    />
  </svg>
);
export default SvgBtnDisabled;
