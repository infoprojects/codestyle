# `@infoprojects/prettier-config`

## Getting started

```
yarn add prettier @infoprojects/prettier-config --dev
```

In `package.json` toevoegen:

```json
{
  "prettier": "@infoprojects/prettier-config
}
```

### Negeer bestanden

Waarschijnlijk wil je Yarn niet formatten. Maak `.prettierignore` aan:

```
.yarn
```

## Format on Save in VSCode

In `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true
}
```

Deze file moet worden ingecheckt in versiebeheer. Niet alle projecten zijn klaar voor Prettier, het is niet handig om dit (nu al) een Global setting te maken.

## ESLint

Voor projecten met ESLint:

```
yarn add eslint-config-prettier --dev
```

Voeg `"prettier"` toe aan `"extends"` in de ESLint configuratie (`.eslintrc.js`):

```js
module.exports = {
  extends: ["@infoprojects/eslint-config"], // 👈 Let op dat "prettier" de laatste is!
};
```

## Stylelint

Voor projecten met Stylelint:

```
yarn add stylelint-config-prettier-scss --dev
```

Voeg `"stylelint-config-prettier-scss"` toe aan `"extends"` in de Stylelint configuratie (in `package.json` of `stylelint.config.js`)

```json
{
  "extends": ["@infoprojects/stylelint-config-scss", "stylelint-config-prettier-scss"] // 👈 Let op dat "stylelint-config-prettier-scss" de laatste is!
}
```
