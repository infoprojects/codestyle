# `@infoprojects/eslint-config`

## Getting started

```
yarn add eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @infoprojects/eslint-config --dev
```

Maak `.eslintrc.js` in root van repository:

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["@infoprojects/eslint-config"],
};
```

## Prettier

Installeer ook Prettier, zie [@infoprojects/prettier-config](https://www.npmjs.com/package/@infoprojects.nl/prettier-config).
