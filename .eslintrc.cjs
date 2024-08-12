module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		semi: ['error', 'never'],
		'linebreak-style': 0,
		indent: [
			'error',
			'tab',
			{ ignoredNodes: ['TemplateLiteral', 'SwitchCase'] },
		],
		'import/no-extraneous-dependencies': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 0,
		'arrow-spacing': ['error', { before: true, after: true }],
		'no-trailing-spaces': ['error', { ignoreComments: true }],
	},
}
