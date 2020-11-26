const fs = require('fs');
const path = require('path');
const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));
module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react', 'eslint:recommended'],
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true,
        mocha: true,
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ['react-hooks', 'prettier'],
    rules: {
        'max-len': [
            'error',
            100,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'arrow-body-style': ['warn', 'as-needed'],
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'max-statements': ['warn', 20],
        'new-cap': ['error', { capIsNew: false }],
        'no-duplicate-imports': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['el', 'ref', 'event'] }],
        'no-plusplus': 'off',
        'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: ['describe'] }],
        'id-length': 'off',
        'no-nested-ternary': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-indent-props': ['error', 4],
        'react/require-extension': 'off',
        'react/prop-types': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'react/sort-comp': [
            'error',
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    '/^on.+$/',
                    '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    'everything-else',
                    '/^render.+$/',
                    'render',
                ],
            },
        ],
        'no-use-before-define': 'off',
        'prettier/prettier': ['error', prettierOptions],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-duplicates': 'error',
        'import/no-named-as-default': 'off',
        'comma-dangle': ['error', 'only-multiline'],
        'react-hooks/rules-of-hooks': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            // resolver needed for different platforms and platform groups
            node: {
                extensions: ['.js', '.smarttv.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
