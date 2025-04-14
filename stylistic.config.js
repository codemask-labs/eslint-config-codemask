import react from 'eslint-plugin-react'
import stylistic from '@stylistic/eslint-plugin'
import { fixupPluginRules } from '@eslint/compat'

export const codemaskStylisticConfig = [
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            'arrow-body-style': ['error', 'as-needed'],
            curly: 'error',
        },
    },
    {
        plugins: {
            react: fixupPluginRules(react),
        },
        rules: {
            'jsx-quotes': ['error', 'prefer-double'],
            'react/jsx-wrap-multilines': [
                'error',
                {
                    declaration: 'parens-new-line',
                    assignment: 'parens-new-line',
                    return: 'parens-new-line',
                    arrow: 'parens-new-line',
                    condition: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'parens-new-line',
                },
            ],
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'react/jsx-equals-spacing': [2, 'never'],
            'react/jsx-curly-spacing': 'error',
        },
    },
]
