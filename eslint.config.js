import js from '@eslint/js'
import tsEslintBase from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import tsEslint from '@typescript-eslint/eslint-plugin'
import preferArrow from 'eslint-plugin-prefer-arrow'
import react from 'eslint-plugin-react'
import nestedIf from 'eslint-plugin-nested-if'
import functional from 'eslint-plugin-functional'
import noElse from 'eslint-plugin-no-else'
import reactHooks from 'eslint-plugin-react-hooks'
import imports from 'eslint-plugin-import'
import a11y from 'eslint-plugin-jsx-a11y'
import stylistic from '@stylistic/eslint-plugin'
import { fixupPluginRules } from '@eslint/compat'

export default [
    js.configs.recommended,
    ...tsEslintBase.config(...tsEslintBase.configs.recommendedTypeChecked),
    {
        ignores: ['.eslintrc.js ', 'node_modules', '@typescript-eslint/parser'],
        languageOptions: {
            globals: {
                browser: true,
                es6: true,
                node: true,
                jest: true
            },
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module'
            }
        },
        plugins: {
            'no-else': noElse,
            'jsx-a11y': a11y,
            '@stylistic': stylistic
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'array-callback-return': 'error',
            'getter-return': 'warn',
            'no-setter-return': 'warn',
            'no-const-assign': 'error',
            'no-debugger': 'error',
            'no-dupe-args': 'error',
            'no-import-assign': 'error',
            'no-self-assign': 'error',
            'no-unexpected-multiline': 'warn',
            'no-unreachable': 'warn',
            'default-case-last': 'warn',
            'default-param-last': 'warn',
            'max-depth': ['error', 3],
            'no-alert': 'warn',
            'no-continue': 'error',
            'no-delete-var': 'error',
            'no-empty-function': [
                'warn',
                {
                    allow: ['constructors']
                }
            ],
            'no-extra-boolean-cast': 'warn',
            'no-extra-label': 'error',
            'no-implicit-coercion': 'error',
            'no-implied-eval': 'error',
            'no-lone-blocks': 'error',
            'no-multi-assign': 'error',
            'no-param-reassign': 'error',
            'no-return-assign': 'error',
            'no-restricted-globals': ['error', 'while', 'do', 'for', 'else', 'continue', 'with', 'let', 'var'],
            'no-unneeded-ternary': 'warn',
            'no-useless-catch': 'warn',
            'no-useless-concat': 'warn',
            'no-useless-return': 'warn',
            'no-useless-escape': 'warn',
            'no-useless-rename': 'warn',
            'no-with': 'error',
            'prefer-rest-params': 'warn',
            'require-await': 'warn',
            yoda: 'error',
            eqeqeq: 'error',
            'prefer-template': 'error',
            'no-underscore-dangle': 'warn',
            'no-unused-expressions': 'off',
            camelcase: 'warn',
            'arrow-body-style': ['error', 'as-needed'],
            'constructor-super': 'error',
            curly: 'error',
            'default-case': 'error',
            'dot-notation': 'error',
            'guard-for-in': 'error',
            'id-match': 'error',
            'max-classes-per-file': ['error', 1],
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-cond-assign': 'error',
            'no-console': 'warn',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-empty': 'warn',
            'no-eval': 'error',
            'no-extra-bind': 'error',
            'no-fallthrough': 'error',
            'no-invalid-this': 'error',
            'no-irregular-whitespace': 'error',
            'no-magic-numbers': 'off',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-redeclare': 'error',
            'no-return-await': 'error',
            'no-sequences': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-undef-init': 'error',
            'no-unsafe-finally': 'error',
            'no-unused-vars': 'off',
            'no-unused-labels': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-const': 'error',
            'prefer-object-spread': 'error',
            radix: 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            '@stylistic/comma-dangle': 'off',
            'max-lines': [
                'error',
                {
                    max: 500,
                    skipBlankLines: true,
                    skipComments: true
                }
            ],
            'no-else-return': ['error', { allowElseIf: false }]
        }
    },
    {
        plugins: {
            '@typescript-eslint': tsEslint,
            '@stylistic': stylistic
        },
        rules: {
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': [
                'error',
                {
                    default: 'generic'
                }
            ],
            '@typescript-eslint/typedef': ['error'],
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-restricted-types': [
                'error',
                {
                    types: {
                        Object: {
                            message: 'Avoid using the `Object` type. Did you mean `Record`?'
                        },
                        Function: {
                            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                        },
                        Boolean: {
                            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
                        },
                        Number: {
                            message: 'Avoid using the `Number` type. Did you mean `number`?'
                        },
                        String: {
                            message: 'Avoid using the `String` type. Did you mean `string`?'
                        },
                        Symbol: {
                            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
                        }
                    }
                }
            ],
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            '@typescript-eslint/no-useless-empty-export': 'error',
            '@typescript-eslint/prefer-enum-initializers': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/member-delimiter-style': [
                'off',
                {
                    multiline: {
                        delimiter: 'comma',
                        requireLast: false
                    }
                }
            ],
            '@typescript-eslint/class-name-casing': 'off',
            '@typescript-eslint/consistent-type-assertions': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/explicit-member-accessibility': [
                'off',
                {
                    accessibility: 'explicit'
                }
            ],
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/member-ordering': 'error',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-parameter-properties': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-namespace-keyword': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@typescript-eslint/triple-slash-reference': [
                'error',
                {
                    path: 'always',
                    types: 'prefer-import',
                    lib: 'always'
                }
            ],
            '@typescript-eslint/unified-signatures': 'error',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-enum-comparison': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-reduce-type-parameter': 'error',
            '@typescript-eslint/strict-boolean-expressions': [
                'error',
                {
                    allowString: false,
                    allowNumber: false,
                    allowNullableBoolean: true,
                    allowNullableEnum: true,
                    allowNullableObject: true
                }
            ],
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error'
        }
    },
    {
        plugins: {
            react: fixupPluginRules(react),
            'react-hooks': reactHooks
        },
        rules: {
            'jsx-quotes': ['error', 'prefer-double'],
            'react-hooks/rules-of-hooks': 'error',
            'react/boolean-prop-naming': ['error', { rule: '^((is|has|are|with)[A-Z]([A-Za-z0-9]?)|disabled)+' }],
            'react/jsx-wrap-multilines': [
                'error',
                {
                    declaration: 'parens-new-line',
                    assignment: 'parens-new-line',
                    return: 'parens-new-line',
                    arrow: 'parens-new-line',
                    condition: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'parens-new-line'
                }
            ],
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'react/hook-use-state': 'off',
            'react/self-closing-comp': 'error',
            'react/jsx-key': 'error',
            'react/jsx-equals-spacing': [2, 'never'],
            'react/jsx-curly-spacing': 'error',
            'react/jsx-boolean-value': 'error',
            'react/jsx-fragments': ['error', 'element'],
            'react/no-children-prop': 'error',
            'react-hooks/exhaustive-deps': 'off'
        }
    },
    {
        plugins: {
            import: imports
        },
        rules: {
            'import/no-extraneous-dependencies': 'off',
            'import/no-internal-modules': 'off',
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index'],
                    warnOnUnassignedImports: true,
                    pathGroups: [
                        {
                            pattern: 'lib/**',
                            group: 'external',
                            position: 'after'
                        },
                        {
                            pattern: 'features/**',
                            group: 'external',
                            position: 'after'
                        },
                        {
                            pattern: 'modules/**',
                            group: 'external',
                            position: 'after'
                        },
                        {
                            pattern: 'common/**',
                            group: 'external',
                            position: 'after'
                        },
                        {
                            pattern: 'assets/**',
                            group: 'external',
                            position: 'after'
                        },
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before'
                        },
                        {
                            pattern: 'react-native',
                            group: 'external',
                            position: 'before'
                        },
                        {
                            pattern: '@nestjs/**',
                            group: 'external',
                            position: 'before'
                        }
                    ],
                    pathGroupsExcludedImportTypes: ['builtin']
                }
            ]
        }
    },
    {
        plugins: {
            'prefer-arrow': preferArrow
        },
        rules: {
            'prefer-arrow/prefer-arrow-functions': [
                'warn',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false
                }
            ]
        }
    },
    {
        plugins: {
            'nested-if': nestedIf
        },
        rules: {
            'nested-if/nested-if-statements': 'error'
        }
    },
    {
        plugins: {
            functional
        },
        rules: {
            'functional/no-let': 'error',
            'functional/functional-parameters': [
                'warn',
                {
                    enforceParameterCount: false
                }
            ],
            'functional/immutable-data': [
                'error',
                {
                    ignoreImmediateMutation: true,
                    ignoreAccessorPattern: '**.current'
                }
            ],
            'functional/no-loop-statements': 'error',
            'functional/prefer-tacit': 'warn'
        }
    }
]
