import type { SVGProps } from 'react';
const SvgIcDeliver = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g stroke="#fff" strokeWidth={2} clipPath="url(#ic_deliver_svg__a)">
      <circle cx={12.999} cy={5.14} r={3.14} />
      <path d="M16.833 4.68H24.5m-14.854 0H1.5m6.708 16.492V12.69C8.368 11.277 9.55 8.45 13 8.45s4.632 2.827 4.792 4.24v8.482M13 18.816V24" />
    </g>
    <defs>
      <clipPath id="ic_deliver_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcDeliver;
