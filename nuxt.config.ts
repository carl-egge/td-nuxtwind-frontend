// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2024-07-04',
	// ==============      MODULES      ==============
	modules: [
		'@pinia/nuxt',
		// '@nuxtjs/scripts',
		'@nuxt/eslint',
		'@nuxt/ui',
		'@nuxt/image',
		[
			'@nuxtjs/turnstile',
			{
				siteKey: '1x00000000000000000000AA',
			},
		],
		[
			'nuxt-mail',
			{
				message: {
					to: process.env.NUXT_PUBLIC_CONTACTMAIL,
				},
				smtp: {
					host: process.env.MAILHOST,
					port: process.env.MAILPORT,
					auth: {
						user: process.env.MAILUSER,
						pass: process.env.MAILPASS,
					},
				},
			},
		],
	],
	// ============== DISABLE DARK MODE ==============
	colorMode: {
		preference: 'light',
	},
	// ============== META AND SEO DATA ==============
	app: {
		head: {
			title: 'Theaterdeck Hamburg',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Theater Jugend Hamburg e.V.: Theaterschule für Jugendliche seit 1983. Inklusive Kurse, Eigenproduktionen und Plattform für junge Regisseure. Erfahre Theater hautnah im Theaterdeck!',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content:
						'Theater Jugend Hamburg, Theaterschule Hamburg, Jugendtheater, Inklusives Theater, Theaterkurse für Jugendliche, Theaterdeck Hamburg, Junge Regisseure Hamburg, Theaterproduktionen Hamburg, Schauspielunterricht Jugendliche, Kritisches Theater, Spieldeck Hamburg, Theaterpädagogik',
				},
				{
					hid: 'author',
					name: 'author',
					content: 'Theaterdeck Hamburg',
				},
			],
		},
	},
	// ============== ENVIRONMENT VARIABLES ==============
	runtimeConfig: {
		pretixApiKey: process.env.PRETIX_API_KEY,
		public: {
			contactmail: process.env.CONTACTMAIL,
			pretixLocalBaseUrl: process.env.PRETIX_LOCAL_BASE_URL,
			pretixBaseUrl: process.env.PRETIX_BASE_URL,
			pretixApiEndpoint: process.env.PRETIX_API_ENDPOINT,
			useMockData: process.env.USE_MOCK_DATA === 'true',
		},
		turnstile: {
			// This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
			// environment variable.
			// Information: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
			secretKey: '1x0000000000000000000000000000000AA',
		},
	},
	// ==============    STYLESHEETS    ==============
	css: [
		'~/assets/css/main.css',
		'~/assets/css/tailwind.css',
		'~/assets/css/fonts.css',
	],
});
