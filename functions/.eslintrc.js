export default {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-unused-vars": "warn",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
  },
};