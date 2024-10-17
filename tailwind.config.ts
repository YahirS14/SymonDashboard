import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bunker: {
          //Bright Colors
          '100': '#ebebf3',
          '200': '#d3d4e4',
          '300': '#adafcc',
          '400': '#8084b0',
          '500': '#606597',

          //Dark Colors
          '600': '#4c4f7d',
          '700': '#3e4066',
          '800': '#363856',
          '900': '#313249',
          '950': '#0c0c12',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
