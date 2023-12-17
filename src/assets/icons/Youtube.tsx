import * as React from 'react';
import { SVGProps } from 'react';
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={32}
      cy={32}
      r={30}
      fill="none"
      // stroke="#fff"
      strokeWidth={4}
    />
    <rect
      x={12}
      y={19}
      width={40}
      height={25}
      rx={3}
      fill="none"
      // stroke="#fff"
      strokeWidth={4}
    />
    <path
      d="m36.003 33.282-5.474 3.326a1.5 1.5 0 0 1-2.279-1.281v-6.653a1.5 1.5 0 0 1 2.279-1.282l5.474 3.326a1.5 1.5 0 0 1 0 2.564Z"
      fill="none"
      // stroke="#fff"
      strokeWidth={4}
    />
  </svg>
);
export default SvgYoutube;
