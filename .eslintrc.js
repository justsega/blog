module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'i18next',
    ],
    rules: {
        'i18next/no-literal-string': [2, { markupOnly: true }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [0],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
        'react/require-default-props': [0],
        'react/jsx-props-no-spreading': [1],
        'react/function-component-definition': [0],
        'react/react-in-jsx-scope': [0],
        'import/no-unresolved': [0],
        'import/prefer-default-export': [0],
        'no-unused-vars': [0],
        'no-shadow': [0],
        'import/extensions': [0],
        'import/no-extraneous-dependencies': [0],
        'no-underscore-dangle': [0],
        '@typescript-eslint/ban-ts-comment': [0],
        indent: [2, 4],
    },
    globals: {
        __IS_DEV__: true,
    },
};
