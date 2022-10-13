/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			// Background colors (light theme):
			'pri-bg': '#A81919',
			'sec-bg': '#BA2121',
			'acc-bg': '#BE2F14',
			
			// Text colors (light theme):
			'pri-txt': '#C03810',
			'sec-txt': '#C2410C',
			'acc-txt': '#CD6236',
			
			// Background colors (light theme):
			'pri-bg': '#A81919',
			'sec-bg': '#BA2121',
			'acc-bg': '#BE2F14',
			
			// Text colors (light theme):
			'pri-txt': '#C03810',
			'sec-txt': '#C2410C',
			'acc-txt': '#CD6236',

			'flame': '#E4491E',
			'vermillion': '#D63C1F',
			'smoky-black': '#1A1614',
			'umber': '#75645A',
			'cinereous': '#877165',
			'pale-silver': '#C2B3AB',
			'isabelline': '#EDE6E1',
			'white': '#FEFCFB',
			
			'blue': '#1DA1F2',
			'dark-blue': '#2795D9',
			'light-blue': '#EFF9FF',
			'dark': '#657786',
			'light': '#AABBC2',
			'lighter': '#E1E8ED',
			'lightest': '#F5FBFA',

			//...dark theme
        }
	},
  },
  plugins: [],
}
