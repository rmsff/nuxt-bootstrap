module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'nuxt/no-cjs-in-config': 'off',
		'no-console': 0,
		'no-unused-vars': 1,
		'require-await': 1,
	},
};
