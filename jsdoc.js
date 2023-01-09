module.exports = {
  plugins: ["jsdoc"],
  rules: {
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-indentation": "warn",
    "jsdoc/empty-tags": "warn",
    "jsdoc/multiline-blocks": "warn",
    "jsdoc/newline-after-description": "warn",
    "jsdoc/no-multi-asterisks": "warn",
    "jsdoc/no-types": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/require-description-complete-sentence": "warn",
    "jsdoc/require-hyphen-before-param-description": "warn",
    "jsdoc/require-jsdoc": [
      "warn",
      {
        contexts: [
          "TSMethodSignature",
          "TSPropertySignature",
          "ExportNamedDeclaration[declaration.type='TSDeclareFunction']:not(ExportNamedDeclaration[declaration.type='TSDeclareFunction'] + ExportNamedDeclaration[declaration.type='TSDeclareFunction'])",
          "ExportNamedDeclaration[declaration.type='FunctionDeclaration']:not(ExportNamedDeclaration[declaration.type='TSDeclareFunction'] + ExportNamedDeclaration[declaration.type='FunctionDeclaration'])"
        ],
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: false,
          FunctionExpression: false,
          MethodDefinition: true
        }
      }
    ],
    "jsdoc/require-param": "warn",
    "jsdoc/require-param-description": "warn",
    "jsdoc/require-param-name": "warn",
    "jsdoc/require-property": "warn",
    "jsdoc/require-property-description": "warn",
    "jsdoc/require-property-name": "warn"
  }
}
