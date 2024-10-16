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
        //Bright Colors
        principalBrightColor: '#F6F7F9',

        //Dark Colors
        principalDarkColor: '#202431',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
