# ESLint Config

Package aims to quickly setup your eslint and prettier configs based on Codemask guidelines.

| Pkg version | Eslint version |
| ----------- | -------------- |
| 2.x         | \> 9.0         |
| 1.x         | < 9.0          |

## What it does?

It simply extends ESLint and Prettier with rules used at Codemask. Check the `eslint.config.mjs` file to see what is included. If you are using prettier you can copy config file as well.

## Installing

1. Add `eslint` and `eslint-config-codemask` to your project:

```
yarn add --dev eslint eslint-config-codemask
```

2. Create (or update) a `eslint.config.mjs` file with the following content:

```js
import { codemaskConfig, codemaskImportConfig, codemaskStylisticConfig } from 'eslint-config-codemask'

export default [
    ...codemaskConfig,
    ...codemaskImportConfig,
    ...codemaskStylisticConfig
]
```

#### codemaskConfig
General code standard rules

#### codemaskImportConfig

Import order rules

#### codemaskStylisticConfig

Stylistic rules

Skip if are using any formatter (prettier, dprint, etc.)

---

### Adding React Native plugin (optional)

1. Add `eslint-plguin-react-native` to your project

```
yarn add eslint-plugin-react-native --dev
```

2. Include `react-native` plugin, and `react-native` rules:

```js
import reactNative from 'eslint-plugin-react-native'
import { fixupPluginRules } from '@eslint/compat'

export default [
    ...codemaskConfig,
    {
        plugins: {
            'react-native': fixupPluginRules(reactNative),
        },
        rules: {
            'react-native/no-raw-text': [
                'error',
                {
                    skip: ['Typography'],
                },
            ],
            'react-native/no-inline-styles': 'warn',
        },
    },
]
```
