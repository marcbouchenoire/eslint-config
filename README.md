# @bouchenoiremarc/eslint-config

☂️ My personal ESLint configurations.

[![npm](https://img.shields.io/npm/v/@bouchenoiremarc/eslint-config?color=%2385f)](https://www.npmjs.com/package/@bouchenoiremarc/eslint-config) [![license](https://img.shields.io/github/license/bouchenoiremarc/@bouchenoiremarc/eslint-config?color=%23d5e)](https://github.com/bouchenoiremarc/@bouchenoiremarc/eslint-config/blob/main/LICENSE)

## Installation

```sh
yarn add -D eslint @bouchenoiremarc/eslint-config
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
- [`@bouchenoiremarc/eslint-config/react`](react.js)
