/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#060706',
				background: '#fbfcfc',
				primary: '#939f96',
				secondary: '#4c8096',
				accent: '#ce8b75',
				accent2: '#fec600',
				'the-primary': {
					50: '#0c0e0c',
					100: '#181b19',
					200: '#303631',
					300: '#48514a',
					400: '#606c63',
					500: '#78877c',
					600: '#939f96',
					700: '#aeb7b0',
					800: '#c9cfca',
					900: '#e4e7e5',
					950: '#f1f3f2',
				},
				// text: '#100e0d',
				// background: '#faf6f5',
				// primary: '#D45E22',
				// secondary: '#edac8b',
				// accent: '#6aadae',
				// 'primary-orange': {
				//   50: '#160a04',
				//   100: '#2c1307',
				//   200: '#58270e',
				//   300: '#843a15',
				//   400: '#af4e1d',
				//   500: '#db6124',
				//   600: '#e28150',
				//   700: '#eaa07b',
				//   800: '#f1c0a7',
				//   900: '#f8dfd3',
				//   950: '#fbefe9',
				// },
				// text: '#1c1a19',
				// background: '#f4efe4',
				// primary: '#f68e4a',
				// secondary: '#d9d3a4',
				// accent: '#5deafd',
				// UTtext: '#20201C',
				// UTbackground: '#E7DAB8',
				// UTprimary: '#C75216',
				// UTsecondary: '#7DA198',
				// UTaccent: '#589194',
				// 'orange-roughy': {
				//   50: '#fef7ee',
				//   100: '#fcedd8',
				//   200: '#f8d7b0',
				//   300: '#f3b97e',
				//   400: '#ee9249',
				//   500: '#e97526',
				//   600: '#cf571a',
				//   700: '#b54519',
				//   800: '#91381b',
				//   900: '#753119',
				//   950: '#3f160b',
				// },
				// jaffa: {
				//   50: '#fef6ee',
				//   100: '#feebd6',
				//   200: '#fcd3ac',
				//   300: '#f9b378',
				//   400: '#f68e4a',
				//   500: '#f3681c',
				//   600: '#e44e12',
				//   700: '#bd3a11',
				//   800: '#962f16',
				//   900: '#792915',
				//   950: '#411209',
				// },
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
