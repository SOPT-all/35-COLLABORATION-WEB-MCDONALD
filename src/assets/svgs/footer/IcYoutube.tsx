import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <path fill="url(#ic_youtube_svg__a)" d="M0 .332h40v40H0z" />
    <defs>
      <pattern
        id="ic_youtube_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#ic_youtube_svg__b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="ic_youtube_svg__b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default SvgIcYoutube;