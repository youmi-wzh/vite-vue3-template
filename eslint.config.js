import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  {
    files: ["**/*.{js,jsx,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // MyGlobalVar: 'readonly'
      },
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      vue,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // prettier
      "prettier/prettier": ["error", { endOfLine: "auto" }],

      // Vue
      "vue/multi-word-component-names": "off",
      "vue/component-definition-name-casing": ["error", "PascalCase"],
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/prefer-import-from-vue": "error",
      "vue/no-setup-props-destructure": "off",
      "vue/no-unused-vars": "warn",
      "vue/no-unused-components": "warn",
      "vue/no-mutating-props": "warn",
      "vue/require-default-prop": "off",
      "vue/require-prop-types": "warn",
      "vue/no-undef-components": "off",
      "vue/no-undef-properties": "off",
      "vue/valid-template-root": "error",
      "vue/no-multiple-template-root": "off",
      "vue/define-macros-order": [
        "warn",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"],
        },
      ],
      "vue/define-props-declaration": "off",
      "vue/define-emits-declaration": "off",
      "vue/jsx-uses-vars": "error",
      "vue/no-deprecated-slot-attribute": "off",

      // JavaScript
      "no-undef": "off",
      "no-dupe-keys": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          caughtErrors: "none",
        },
      ],
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "prefer-const": "warn",
      "no-var": "error",
      "object-shorthand": "warn",
      "prefer-template": "warn",
      "no-empty": "warn",
      "no-extra-semi": "error",
      "no-unreachable": "warn",
      "no-duplicate-imports": "error",

      // import
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external", "internal"],
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "ignore",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/default": "off",
      "import/no-duplicates": "error",
    },
  },
  {
    files: ["*.vue"],
    rules: {
      "vue/block-order": ["warn", { order: ["script", "template", "style"] }],
      "vue/component-tags-order": ["warn", { order: ["script", "template", "style"] }],
      "no-unused-vars": "off",
    },
  },
  {
    files: ["*.jsx"],
    rules: {
      "vue/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["src/main.js", "src/router/**/*.js", "src/store/**/*.js"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["vite.config.js", "eslint.config.js"],
    rules: {
      "no-undef": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
];
