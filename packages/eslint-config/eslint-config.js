module.exports = {
  reportUnusedDisableDirectives: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    eqeqeq: ["error"],
    "no-else-return": ["error", { allowElseIf: false }],
    "@typescript-eslint/no-empty-interface": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^(_|h$|Fragment$)",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
