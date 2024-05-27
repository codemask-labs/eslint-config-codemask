const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const tsParser = require('@typescript-eslint/parser')
const tsEslint = require('@typescript-eslint/eslint-plugin')
const preferArrow = require('eslint-plugin-prefer-arrow')
const react = require('eslint-plugin-react')
const nestedIf = require('eslint-plugin-nested-if')
const functional = require('eslint-plugin-functional')
const noElse = require('eslint-plugin-no-else')
const reactNative = require('eslint-plugin-react-native')
const reactHooks = require('eslint-plugin-react-hooks')
const unusedImports = require('eslint-plugin-unused-imports')
const imports = require('eslint-plugin-import')
const a11y = require('eslint-plugin-jsx-a11y')
const { fixupConfigRules } = require('@eslint/compat')

module.exports = [
    js.configs.recommended,
    ...tseslint.config(
        ...tseslint.configs.recommended
    ),
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
            },
        },
        plugins: {
            '@typescript-eslint': tsEslint,
            'prefer-arrow': preferArrow,
            'nested-if': nestedIf,
            'no-else': noElse,
            react,
            functional,
            'react-native': reactNative,
            'react-hooks': reactHooks,
            'unused-imports': unusedImports,
            'jsx-a11y': a11y,
            'import': imports
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            // built-in rules
            'array-callback-return': 'error',
            'getter-return': 'warn',
            'no-setter-return': 'warn',
            'no-const-assign': 'error',
            'no-debugger': 'error',
            'no-duplicate-keys': 'error',
            'no-dupe-args': 'error',
            'no-import-assign': 'error',
            'no-self-assign': 'error',
            'no-unexpected-multiline': 'warn',
            'no-unreachable': 'warn',
            'class-methods-use-this': 'warn',
            'default-case-last': 'warn',
            'default-param-last': 'warn',
            'max-depth': ['error', 3],
            'no-alert': 'warn',
            'no-continue': 'error',
            'no-delete-var': 'error',
            'no-empty-function': 'warn',
            'no-extra-boolean-cast': 'warn',
            'no-extra-label': 'error',
            'no-implicit-coercion': 'error',
            'no-implied-eval': 'error',
            'no-lone-blocks': 'error',
            'no-multi-assign': 'error',
            'no-param-reassign': 'error',
            'no-return-assign': 'error',
            'no-restricted-globals': [
                'error',
                'while', 'do', 'for', 'else', 'continue', 'with', 'let', 'var'
            ],
            'no-unneeded-ternary': 'warn',
            'no-useless-catch': 'warn',
            'no-useless-concat': 'warn',
            'no-useless-constructor': 'warn',
            'no-useless-return': 'warn',
            'no-useless-escape': 'warn',
            'no-useless-rename': 'warn',
            'no-with': 'error',
            'prefer-rest-params': 'warn',
            'require-await': 'warn',
            'yoda': 'error',
            'eqeqeq': 'error',
            'prefer-template': 'error',
            'no-underscore-dangle': 'warn',
            'no-unused-expressions': 'off',
            'camelcase': 'warn',
            'one-var': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'constructor-super': 'error',
            'curly': 'error',
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
            'no-shadow': 'warn',
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
            'radix': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            'comma-dangle': 'off',
            'max-lines': ['error', {
                'max': 500,
                'skipBlankLines': true,
                'skipComments': true
            }],
            'no-else-return': ['error', { allowElseIf: false }],
            // typescript-eslint rules
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': [
                'error',
                {
                    'default': 'generic'
                }
            ],
            '@typescript-eslint/typedef': ['error'],
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/ban-types': [
                'error',
                {
                    'types': {
                        'Object': {
                            'message': 'Avoid using the `Object` type. Did you mean `Record`?'
                        },
                        'Function': {
                            'message': 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                        },
                        'Boolean': {
                            'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?'
                        },
                        'Number': {
                            'message': 'Avoid using the `Number` type. Did you mean `number`?'
                        },
                        'String': {
                            'message': 'Avoid using the `String` type. Did you mean `string`?'
                        },
                        'Symbol': {
                            'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?'
                        },
                        'unknown': {
                            'message': 'Please use proper type'
                        }
                    }
                }
            ],
            '@typescript-eslint/comma-dangle': 'error',
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            '@typescript-eslint/no-useless-empty-export': 'error',
            '@typescript-eslint/prefer-enum-initializers': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/member-delimiter-style': [
                'off',
                {
                    'multiline': {
                        'delimiter': 'comma',
                        'requireLast': false
                    }
                }
            ],
            '@typescript-eslint/class-name-casing': 'off',
            '@typescript-eslint/consistent-type-assertions': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/explicit-member-accessibility': ['off', {
                'accessibility': 'explicit'
            }],
            '@typescript-eslint/indent': [
                'error',
                4,
                {
                    'ArrayExpression': 'first',
                    'FunctionDeclaration': {
                        'parameters': 'first'
                    },
                    'FunctionExpression': {
                        'parameters': 'first'
                    },
                    'SwitchCase': 1,
                    'ignoredNodes': ['ClassBody.body > PropertyDefinition[decorators.length > 0] > .key']
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
            '@typescript-eslint/semi': ['error', 'never'],
            '@typescript-eslint/triple-slash-reference': ['error', {
                'path': 'always',
                'types': 'prefer-import',
                'lib': 'always'
            }],
            '@typescript-eslint/unified-signatures': 'error',
            // plugins rules
            'prefer-arrow/prefer-arrow-functions': ['warn', {
                'disallowPrototype': true,
                'singleReturnOnly': false,
                'classPropertiesAllowed': false
            }],
            'nested-if/nested-if-statements': 'error',
            'functional/no-let': 'error',
            'functional/functional-parameters': 'warn',
            'functional/immutable-data': ['error', {
                ignoreImmediateMutation: true,
                ignoreAccessorPattern: '**.current'
            }],
            'functional/no-loop-statements': 'error',
            'functional/prefer-tacit': 'warn',
            'import/no-extraneous-dependencies': 'off',
            'import/no-internal-modules': 'off',
            'import/order': ['warn', {
                'groups': ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
                'newlines-between': 'ignore'
            }],
            'jsx-quotes': ['error', 'prefer-double'],
            'react-hooks/rules-of-hooks': 'error',
            'unused-imports/no-unused-imports': 'error'
        }
    },
    // waiting for updates
    ...fixupConfigRules({
        'react/boolean-prop-naming': ['error', { 'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
        'react/jsx-wrap-multilines': ['error', {
            'declaration': 'parens-new-line',
            'assignment': 'parens-new-line',
            'return': 'parens-new-line',
            'arrow': 'parens-new-line',
            'condition': 'parens-new-line',
            'logical': 'parens-new-line',
            'prop': 'parens-new-line'
        }],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/hook-use-state': 'error',
        'react/self-closing-comp': 'error',
        'react/jsx-key': 'error',
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-curly-spacing': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-fragments': ['error', 'element'],
        'react/no-children-prop': 'error',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-raw-text': 'error',
        'react-hooks/exhaustive-deps': 'off'
    })
]
