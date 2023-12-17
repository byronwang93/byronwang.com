import * as React from 'react';
import { SVGProps } from 'react';
const SvgPersonalWebsite = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="#fff"
      strokeWidth={4}
    />
    <circle
      cx={32}
      cy={25}
      r={11}
      stroke="#fff"
      strokeWidth={4}
    />
    <path
      d="M24 33.5s-4.698 5.382-6.5 9.5C14 51 15 57 15 57M39 33s4.698 5.382 6.5 9.5c3.5 8 2.5 14 2.5 14"
      stroke="#fff"
      strokeWidth={4}
    />
  </svg>
);
export default SvgPersonalWebsite;
