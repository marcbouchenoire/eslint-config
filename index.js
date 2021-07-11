module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "typescript-sort-keys",
    "sort-keys-fix",
    "import",
    "unicorn",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        "newlines-between": "never"
      }
    ],
    "prefer-rest-params": "off",
    "sort-keys-fix/sort-keys-fix": "warn",
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prevent-abbreviations": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "tsconfig.json"
      }
    }
  }
}
