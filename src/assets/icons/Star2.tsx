import * as React from 'react';
import { SVGProps } from 'react';

const SvgStar2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={3}
      d="M1.493 10.004 32.85 23.072M10.004 32.478 23.072 1.121M11.056 1.06l12.756 31.484M1.06 22.915l31.484-12.757"
    />
  </svg>
);

export default SvgStar2;
