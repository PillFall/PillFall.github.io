/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  "plugins": [
    "html",
  ],
  "env": {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "vue/html-indent": ["warn", 4, {}],
    "vue/html-closing-bracket-newline": ["warn", {
      "singleline": "never",
      "multiline": "never",
    }],
    "vue/html-self-closing": ["warn", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "never",
      },
      "svg": "always",
      "math": "always",
    }],
    "vue/require-default-prop": "off",
    "indent": ["error", 4],
    "semi": "error",
    "semi-spacing": "error",
    "semi-style": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "warn",
    "quotes": ["warn", "double"],
  },
};
