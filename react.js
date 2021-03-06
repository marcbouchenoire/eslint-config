module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/display-name": "off",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/style-prop-object": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
