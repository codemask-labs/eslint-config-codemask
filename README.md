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
yarn add --dev eslint-config-codemask
# please also install peerDependecy:
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint eslint-plugin-functional eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-nested-if eslint-plugin-no-else eslint-plugin-prefer-arrow eslint-plugin-react eslint-plugin-react-hooks @eslint/js typescript-eslint
```

2. Create (or update) a `eslint.config.js` file with the following content:

```js
import codemaskConfig from 'eslint-config-codemask'

module.exports = [
    ...codemaskConfig
]
```
---
