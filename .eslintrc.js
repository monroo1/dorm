module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    root: true,
    extends: ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "react-hooks",
        // "monroo-plugin",
        "unused-imports",
        "import",
    ],
    rules: {
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
        "no-shadow": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-param-reassign": "off",
        "no-undef": "off",
        "react/no-array-index-key": "off",
        // "monroo-plugin/path-checker": ["error", { alias: "@" }],
        // "monroo-plugin/layer-imports": [
        //     "error",
        //     {
        //         alias: "@",
        //         ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
        //     },
        // ],
        // "monroo-plugin/public-api-imports": [
        //     "error",
        //     {
        //         alias: "@",
        //         testFilePatterns: [
        //             "**/*.test.*",
        //             "**/*.stories.*",
        //             "**/StoreDecorator.tsx",
        //         ],
        //     },
        // ],
        "unused-imports/no-unused-imports": "error",
        "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
        "react/no-unstable-nested-components": "warn",
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
