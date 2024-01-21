/* eslint-disable */
module.exports = {
    root: true,
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'tsconfigRootDir': __dirname,
        'project': ['./tsconfig.json'],
    },
    'ignorePatterns': ['dist', 'docs'],
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        // Readability/Stylistic
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'windows',
        ],
        'quotes': 'off',
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        'semi': 'off',
        '@typescript-eslint/semi': 'error',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'error',
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': 'warn',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'warn',

        // Naming conventions
        'camelcase': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': ['camelCase'],
            },
            {
                'selector': 'variable',
                'format': ['camelCase', 'UPPER_CASE'],
            },
            {
                'selector': 'parameter',
                'format': ['camelCase'],
                'leadingUnderscore': 'allow',
            },
            {
                'selector': 'memberLike',
                'modifiers': ['private'],
                'format': ['camelCase'],
                'leadingUnderscore': 'forbid',
            },
            {
                'selector': 'typeLike',
                'format': ['PascalCase'],
            },
            {
                'selector': [
                    'classProperty',
                    'objectLiteralProperty',
                    'typeProperty',
                    'classMethod',
                    'objectLiteralMethod',
                    'typeMethod',
                    'accessor',
                    'enumMember',
                ],
                'format': null,
                'modifiers': ['requiresQuotes'],
            },
        ],

        // Values, expressions, types, functions
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            { 'before': false, 'after': true },
        ],

        // Imports and exports
        'no-duplicate-imports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
    },
};