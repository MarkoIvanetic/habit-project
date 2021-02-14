module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  ignorePatterns: ["/node_modules/**", "/build/**"],
  rules: {
    "no-unused-vars": [
      "warn",
      { args: "none", argsIgnorePattern: "req|res|next|val" },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: [
        ["@components", "src/components"],
        ["@hooks", "src/hooks"],
        ["@actions", "actions"],
        ["@config", "config"],
        ["@api", "api"],
        ["@static", "static"],
      ],
    },
  },
}
