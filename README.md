# @bouchenoiremarc/eslint-config

☂️ My personal ESLint configurations.

[![npm](https://img.shields.io/npm/v/@bouchenoiremarc/eslint-config?color=%230cf)](https://www.npmjs.com/package/@bouchenoiremarc/eslint-config) [![license](https://img.shields.io/github/license/bouchenoiremarc/eslint-config?color=%2385f)](https://github.com/bouchenoiremarc/eslint-config/blob/main/LICENSE)

## Installation

#### Yarn

```bash
yarn add -D eslint @bouchenoiremarc/eslint-config
```

#### npm

```bash
npm install --save-dev eslint @bouchenoiremarc/eslint-config
```

## Usage

Create a `.eslintrc` configuration and extend the base configuration.

```json
{
  "extends": "@bouchenoiremarc/eslint-config"
}
```

When extending multiple configurations, keep the base configuration first.

```json
{
  "extends": [
    "@bouchenoiremarc/eslint-config",
    "@bouchenoiremarc/eslint-config/react"
  ]
}
```

## Configurations

- [`@bouchenoiremarc/eslint-config`](index.js)
- [`@bouchenoiremarc/eslint-config/jest`](jest.js)
- [`@bouchenoiremarc/eslint-config/react`](react.js)
