# @marcbouchenoire/eslint-config

☂️ My personal ESLint configurations.

[![npm](https://img.shields.io/npm/v/@marcbouchenoire/eslint-config?color=%230cf)](https://www.npmjs.com/package/@marcbouchenoire/eslint-config)
[![license](https://img.shields.io/github/license/marcbouchenoire/eslint-config?color=%2385f)](https://github.com/marcbouchenoire/eslint-config/blob/main/LICENSE)

## Installation

#### Yarn

```bash
yarn add -D eslint @marcbouchenoire/eslint-config
```

#### npm

```bash
npm install --save-dev eslint @marcbouchenoire/eslint-config
```

## Usage

Create a `.eslintrc` configuration and extend the base configuration.

```json
{
  "extends": "@marcbouchenoire/eslint-config"
}
```

When extending multiple configurations, keep the base configuration first.

```json
{
  "extends": [
    "@marcbouchenoire/eslint-config",
    "@marcbouchenoire/eslint-config/react"
  ]
}
```

## Configurations

- [`@marcbouchenoire/eslint-config`](index.js)
- [`@marcbouchenoire/eslint-config/jest`](jest.js)
- [`@marcbouchenoire/eslint-config/react`](react.js)
