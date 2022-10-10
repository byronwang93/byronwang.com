import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.813 2.688c-6.72 0-14.782 6.718-14.782 17.468S12.094 38.97 22.844 38.97c10.75 0 17.468-8.063 17.468-14.782-14.78 9.407-30.906-6.718-21.5-21.5Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgMoonIcon;
