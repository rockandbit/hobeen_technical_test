module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'no-unused-vars': 'off', 
        'semi': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'no-multiple-empty-lines': ['warn', { max: 2 }],
        'indent': ['error', 4],

    },
};
  