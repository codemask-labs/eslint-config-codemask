# ESLint Config

Package aims to quickly setup your eslint and prettier configs based on Codemask guidelines.

|Pkg version| Eslint version |
|---|---------|
| 2.x | \> 9.0  |
| 1.x | < 9.0   |


## What it does?

It simply extends ESLint and Prettier with rules used at Codemask. Check the `eslint.config.mjs` file to see what is included. If you are using prettier you can copy config file as well.

## Installing

1. Add `eslint` and `eslint-config-codemask` to your project:

```
yarn add --dev eslint eslint-config-codemask
```

2. Create (or update) a `eslint.config.mjs` file with the following content:

```js
import codemaskConfig from 'eslint-config-codemask'

export default [
    ...codemaskConfig
]
```

---

### Adding prettier (optional)

1. Add `prettier` to your project

```shell
yarn add prettier --dev
```

2. Create (or update) a `.prettierrc` file with the following content:

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "printWidth": 150
}
```

3. Disable `eslint` conflicting rules with `prettier` (in `eslint.config.mjs`) for propper formatting:


```ts
import codemaskConfig from 'eslint-config-codemask'

export default [
    ...codemaskConfig,
    {
        rules: {
            '@typescript-eslint/indent': 'off'
        }
    }
]
```

---

### Adding Editorconfig (optional)

1. Create (or update) `.editorconfig` file with the following content:

```conf
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
max_line_length = 150
trim_trailing_whitespace = true

[*.{sh,podspec,yml,yaml}]
indent_style = space
indent_size = 2

[.*rc]
indent_size = 2

```

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
            'react-native/no-raw-text': ['error', {
                skip: ['Typography']
            }],
            'react-native/no-inline-styles': 'warn'
        }
    }
]
```
