module.exports = {
	env: {
		node: true,
		jest: true,
		commonjs: true,
		es2021: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
