import type { SVGProps } from 'react';
const SvgIcLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g clipPath="url(#ic_location_svg__a)">
      <path
        stroke="#fff"
        strokeWidth={2}
        d="M17.82 12.46 12.52 22l-5.138-8.67c-1.427-2.408-2.576-5.22-1.547-7.822C6.776 3.13 8.82 1 12.52 1c4.426.492 6.203 3.08 6.753 5.508.466 2.058-.428 4.108-1.453 5.952Z"
      />
      <circle cx={12.521} cy={8.305} r={0.913} fill="#fff" />
    </g>
    <defs>
      <clipPath id="ic_location_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcLocation;
