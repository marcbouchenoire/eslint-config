module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  overrides: [
    {
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
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json"
      },
      plugins: [
        "@typescript-eslint",
        "typescript-sort-keys",
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
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" }
        ],
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/sort-type-union-intersection-members": "warn",
        "@typescript-eslint/unified-signatures": "warn"
      },
      settings: {
        "import/resolver": {
          typescript: {
            project: "./tsconfig.json"
          }
        }
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["import", "unicorn", "unused-imports", "prettier"],
  rules: {
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
    "unicorn/filename-case": "off",
    "unicorn/import-style": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-empty-file": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
    "unused-imports/no-unused-imports": "warn"
  }
}
