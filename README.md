# ESLint Config

Package aims to quickly setup your eslint and prettier configs based on Codemask guidelines.

|Pkg version| Eslint version |
|---|---------|
| 2.x | \> 9.0  |
| 1.x | < 9.0   |


## What it does?

It simply extends ESLint and Prettier with rules used at Codemask. Check the `eslint.config.js` file to see what is included. If you are using prettier you can copy config file as well.

## Installing

1. In your project folder, run:

```
yarn add --dev eslint eslint-config-codemask
```

2. Create (or update) a `eslint.config.js` file with the following content:

```js
import codemaskConfig from 'eslint-config-codemask'

export default [
    ...codemaskConfig
]
```

3. Add prettier (optional)

```shell
yarn add prettier --dev
```

Copy `.prettierrc` file to your project root folder.

Simply extend the config with one rule:

```diff
import codemaskConfig from 'eslint-config-codemask'

module.exports = [
    ...codemaskConfig,
+    {
+        rules: {
+            '@typescript-eslint/indent': 'off'
+        }
+    }
]
```
---

4. Editorconfig (optional)

Copy `.editorconfig` file to your project root folder.
