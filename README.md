# ESLint Config

Package aims to quickly setup your eslint and prettier configs based on Codemask guidelines.

## What it does?

It simply extends ESLint and Prettier with rules used at Codemask. Check the .eslintrc.js file to see what is included. If you are using prettier you can copy config file as well.

## Installing

1. In your project folder, run:

```
yarn add --dev eslint-config-codemask
# please also install peerDependecy:
yarn add yarn install --dev @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint eslint-plugin-functional eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-nested-if eslint-plugin-no-else eslint-plugin-no-loops eslint-plugin-prefer-arrow eslint-plugin-react eslint-plugin-react-hooks
```


2. Create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'codemask'
  ]
}
```
---
