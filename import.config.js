import imports from 'eslint-plugin-import'

export const codemaskImportConfig = [
    {
        plugins: {
            import: imports,
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
                            position: 'after',
                        },
                        {
                            pattern: 'features/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: 'modules/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: 'common/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: 'assets/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react-native',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@nestjs/**',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                },
            ],
        },
    },
]
