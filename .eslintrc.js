module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	root: true,
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"airbnb/hooks",
		"plugin:i18next/recommended",
		"plugin:storybook/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
	rules: {
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		indent: [2, "tab"],
		"no-tabs": 0,
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".ts", ".tsx", ".js", ".jsx"],
			},
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/function-component-definition": "off",
		"react/jsx-props-no-spreading": "warn",
		"import/extensions": "off",
		"linebreak-style": "off",
		"no-shadow": "off",
		"import/no-extraneous-dependencies": "off",
		quotes: ["error", "double"],
		"no-underscore-dangle": "off",
		"i18next/no-literal-string": [
			"error",
			{
				markupOnly: true,
				ignoreAttribute: ["data-testid", "to"],
			},
		],
		"max-len": [
			"error",
			{
				ignoreComments: true,
				code: 100,
			},
		],
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
		"no-param-reassign": "off",
		"no-undef": "off",
		"react/no-array-index-key": "off",
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	overrides: [
		{
			files: ["**/src/**/*.{test,stories}.{ts, tsx}"],
			rules: {
				"i18next/no-literal-string": "off",
				"max-len": "off",
			},
		},
	],
};
