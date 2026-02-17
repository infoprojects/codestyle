"use strict";

module.exports = {
  extends: "stylelint-config-recommended-scss",
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  reportDescriptionlessDisables: true,
  defaultSeverity: "error",
  rules: {
    "no-descending-specificity": null,
    "scss/at-mixin-argumentless-call-parentheses": "always",
  },
};
