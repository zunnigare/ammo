module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'no-console': 0,
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'import/extensions': [1, 'never'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
};
