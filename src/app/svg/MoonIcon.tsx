import React from 'react';
import type { SVGProps } from 'react';

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="text-bunker-950 hover:text-bunker-900 transition duration-300 ease-in-out transform hover:rotate-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="currentColor"
          d="M20.993 13.313a6 6 0 0 1-7.306-7.306a7 7 0 1 0 7.306 7.306"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.5 8.25a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.25 9.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5M7.5 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
