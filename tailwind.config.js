/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#0b0507',
				background: '#faf2f5',
				'theme-primary': {
					50: '#fff0f3',
					100: '#ffe1e8',
					200: '#ffc8d6',
					300: '#ff9cb5',
					400: '#ff6490',
					500: '#ff2e6d',
					600: '#f51663', // main theme color
					700: '#ce024e',
					800: '#ac0548',
					900: '#930845',
					950: '#530020',
				},
				'theme-secondary': '#eed8df',
				'theme-accent': '#fac218',
			},
			fontFamily: {
				sans: [
					'Roboto Condensed',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
				heading: ['Special Elite', 'cursive'],
			},
			fontWeight: {
				light: 300,
				normal: 400,
				medium: 500,
				bold: 700,
			},
		},
	},
	plugins: [],
};
