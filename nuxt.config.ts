// https://nuxt.com/docs/api/configuration/nuxt-config

const isDev = process.env.NODE_ENV !== 'production';

export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2024-07-04',
	// ==============      MODULES      ==============
	modules: [
		'@pinia/nuxt',
		'@nuxt/scripts',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxtjs/turnstile',
		'@nuxtjs/leaflet',
		// Only load the eslint module in development
		...(isDev ? ['@nuxt/eslint'] : []),
	],
	turnstile: {
		// Information: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
		siteKey:
			process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA',
	},
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
					// hid: 'description',
					name: 'description',
					content:
						'Theater Jugend Hamburg e.V.: Theaterschule für Jugendliche seit 1983. Inklusive Kurse, Eigenproduktionen und Plattform für junge Regisseure. Erfahre Theater hautnah im Theaterdeck!',
				},
				{
					// hid: 'keywords',
					name: 'keywords',
					content:
						'Theater Jugend Hamburg, Theaterschule Hamburg, Jugendtheater, Inklusives Theater, Theaterkurse für Jugendliche, Theaterdeck Hamburg, Junge Regisseure Hamburg, Theaterproduktionen Hamburg, Schauspielunterricht Jugendliche, Kritisches Theater, Spieldeck Hamburg, Theaterpädagogik',
				},
				{
					// hid: 'author',
					name: 'author',
					content: 'Theaterdeck Hamburg',
				},
			],
		},
	},
	// ============== ENVIRONMENT VARIABLES ==============
	runtimeConfig: {
		// PRIVATE configuration: values here are only available on the server
		pretixApiKey: process.env.NUXT_PRETIX_API_KEY || '',
		mailersenderApiKey: process.env.NUXT_MAILERSENDER_API_KEY || '',
		// Grouping additional private configuration (e.g., MailChimp)
		mailchimp: {
			apiKey: process.env.NUXT_MAILCHIMP_API_KEY || '',
			serverPrefix: process.env.NUXT_MAILCHIMP_SERVER_PREFIX || 'us13',
			audienceId: process.env.NUXT_MAILCHIMP_AUDIENCE_ID || '',
		},
		// PRIVATE secret for Turnstile
		turnstile: {
			secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '',
		},

		// PUBLIC configuration: exposed to the client via a nested `public` key
		public: {
			pretixLocalBaseUrl:
				process.env.NUXT_PUBLIC_PRETIX_LOCAL_BASE_URL ||
				'http://localhost:8000',
			pretixBaseUrl:
				process.env.NUXT_PUBLIC_PRETIX_BASE_URL ||
				'https://pretix.dev2.tdlogblog.de',
			pretixApiEndpoint:
				process.env.NUXT_PUBLIC_PRETIX_API_ENDPOINT || '/api/v1/organizers/td',
			useMockData: process.env.NUXT_PUBLIC_USE_MOCK_DATA === 'true',
			contactFormFromName:
				process.env.NUXT_PUBLIC_CONTACT_FORM_FROM_NAME || 'TDLogBlog',
			contactFormFromEmail:
				process.env.NUXT_PUBLIC_CONTACT_FORM_FROM_EMAIL ||
				'no-reply@tdlogblog.de',
			contactFormRecipientName:
				process.env.NUXT_PUBLIC_CONTACT_FORM_RECIPIENT_NAME || 'Carl Egge',
			contactFormRecipient:
				process.env.NUXT_PUBLIC_CONTACT_FORM_RECIPIENT || 'carl.egge@web.de',
		},
	},
	// ==============    REGISTER PRETIX WIDGET    ==============
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) =>
				['pretix-widget', 'pretix-button'].includes(tag),
		},
	},
	// ==============    STYLESHEETS    ==============
	css: [
		'~/assets/css/main.css',
		'~/assets/css/tailwind.css',
		'~/assets/css/fonts.css',
	],
});
