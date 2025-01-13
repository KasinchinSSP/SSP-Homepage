/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		colors: {
			primary: '#003366',
			secondary: '#228b22',
			tertiary: '#F5F5F5',
			quaternary: '#D9D9D9',
			transparent: 'transparent',
			slate: colors.slate,
			stone: colors.stone,
			blue: colors.blue,
			green: colors.green,
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			sky: colors.sky,
			cyan: colors.cyan,
			neutral: colors.neutral,
			pink: colors.pink,
			rose: colors.rose,
			lime: colors.lime
		},
		extend: {
			fontFamily: {
				sans: ['Kanit', 'sans-serif']
			}
		}
	},
	plugins: [require('flowbite/plugin')]
}
