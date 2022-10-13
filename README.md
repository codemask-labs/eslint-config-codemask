# ESLint (and Prettier) config

These are settings for ESLint and Prettier used by Codemask.

## What it does

This package setup lints for your project. Check the .eslintrc.js file to see what is included. You can always change this rules locally

## Installing

1. In your project folder, run:

```
npm i -D eslint-config-codemask
# or yarn install --dev eslint-config-codemask
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
