module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "import", "unicorn", "prettier"],
  rules: {
    "prefer-rest-params": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prevent-abbreviations": "off",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/order": [
      "warning",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        "newlines-between": "never"
      }
    ]
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "tsconfig.json"
      }
    }
  }
}
