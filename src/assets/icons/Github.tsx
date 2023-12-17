import * as React from 'react';
import { SVGProps } from 'react';
const SvgGithub = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      d="M49.5 30c0 7.732-7.611 14-17 14s-17-6.268-17-14 7.611-13 17-13 17 5.268 17 13Z"
      // fill="#fff"
    />
    <path
      d="M45.5 57c-2 7-6.373 3.5-13 3.5s-13 2-13-4.5c0-8.837 6.373-17 13-17s13 9.163 13 18Z"
      // fill="#fff"
    />
    <path
      d="M24 47.5c-.5 2-2.5 2-6.5 1.5S11 44.5 11 44.5"
      // stroke="#fff"
      fill="none"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path
      d="M46.728 15.932a.956.956 0 0 1 1.15.875c.069 1.03.14 2.59.044 3.739-.098 1.179-.434 2.692-.71 3.786-.172.69-.994.952-1.549.509l-6.224-4.968a.973.973 0 0 1 .19-1.651c.965-.444 2.25-1.004 3.276-1.341 1.157-.38 2.771-.736 3.823-.95ZM17.872 15.643a.956.956 0 0 0-1.15.875c-.07 1.03-.14 2.59-.045 3.74.098 1.178.435 2.692.71 3.786.173.689.994.951 1.55.508l6.223-4.968a.973.973 0 0 0-.19-1.65c-.965-.445-2.25-1.005-3.276-1.342-1.157-.38-2.77-.735-3.822-.949Z"
      // fill="#fff"
    />
  </svg>
);
export default SvgGithub;
