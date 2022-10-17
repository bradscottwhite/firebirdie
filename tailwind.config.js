/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		colors: { // Color schema: https://coolors.co/e4491e-7f3725-4d271d-341f19-1a1614-75645a-877165-c2b3ab-ede6e1-fefcfb
			'flame': '#E4491E',
			'smoky-black': '#341F19',//'#1A1614',
			'umber': '#75645A',
			'cinereous': '#877165',
			'pale-silver': '#C2B3AB',
			'isabelline': '#EDE6E1',
			'white': '#FEFCFB',
			
			/*'blue': '#1DA1F2',
			'dark-blue': '#2795D9',
			'light-blue': '#EFF9FF',
			'dark': '#657786',
			'light': '#AABBC2',
			'lighter': '#E1E8ED',
			'lightest': '#F5FBFA',*/
        }
	},
  },
  plugins: [],
}
