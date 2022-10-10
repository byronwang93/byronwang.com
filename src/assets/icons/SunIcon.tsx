import * as React from 'react';
import { SVGProps } from 'react';

const SvgSunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M21.5 30.906a9.406 9.406 0 1 0 0-18.812 9.406 9.406 0 0 0 0 18.812ZM6.316 6.316l5.644 5.644M6.316 36.685l5.644-5.644M36.685 36.685 31.04 31.04M36.685 6.316 31.04 11.96M21.5 2.688v5.374M2.688 21.5h5.374M21.5 40.313v-5.376M40.313 21.5h-5.376"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSunIcon;
