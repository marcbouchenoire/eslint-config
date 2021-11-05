module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json", "./packages/**/tsconfig.json"]
  },
  plugins: [
    "@typescript-eslint",
    "typescript-sort-keys",
    "sort-keys-fix",
    "import",
    "unicorn",
    "unused-imports",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "import/export": "error",
    "import/newline-after-import": "warn",
    "import/no-absolute-path": "warn",
    "import/no-duplicates": "warn",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
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
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "sort-keys-fix/sort-keys-fix": "warn",
    "unicorn/filename-case": "off",
    "unicorn/import-style": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
    "unused-imports/no-unused-imports": "warn"
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json", "./packages/**/tsconfig.json"]
      }
    }
  }
}
