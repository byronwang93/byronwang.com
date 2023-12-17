import * as React from 'react';
import { SVGProps } from 'react';
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
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
    <circle
      cx={21.294}
      cy={20.294}
      r={3.294}
      // fill="#fff"
    />
    <path
      // fill="#fff"
      d="M18 26.882h6.588v18.667H18zM26.784 26.882h6.588v18.667h-6.588zM33.373 33.47v-4.94s4.392-3.844 8.235-1.648C45.45 29.078 46 32.372 46 33.471v12.078h-5.49s.274-10.98-.55-12.078c-3.293-4.392-6.587 0-6.587 0Z"
    />
  </svg>
);
export default SvgLinkedin;
