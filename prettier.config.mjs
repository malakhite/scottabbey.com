/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	arrowParens: 'always',
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	overrides: [
		{
			files: '*.yml',
			options: {
				singleQuote: false,
			},
		},
	],
};

export default config;
