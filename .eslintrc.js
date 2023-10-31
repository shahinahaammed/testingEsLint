module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "module"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react"
	],
	"rules": {
		// "react/react-in-jsx-scope": "off",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}
}
