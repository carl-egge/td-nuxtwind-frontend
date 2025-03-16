// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/no-multiple-template-root': 'off',
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				registeredComponentsOnly: false,
				ignores: [],
			},
		],
		'vue/first-attribute-linebreak': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
				},
			},
		],
		'no-console': ['off'],
		eqeqeq: ['error', 'always'],
	},
});
