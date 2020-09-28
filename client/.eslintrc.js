module.exports = {
  extends: [
    "@rs/eslint-config/react",
    "plugin:react/recommended",
    "@rs/eslint-config/typescript",
    "@rs/eslint-config",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": "webpack",
  },
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/interface-name-prefix": 0,
  }
};
