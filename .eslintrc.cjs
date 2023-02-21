module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: ["cypress/*/*.*", "cypress.config.ts"],
  rules: {
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true },
    ],
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": 0,
  },
};
