/*
 * File: .eslintrc.js
 * File Created: Thursday, 12th December 2019 3:34:39 pm
 * Author: ChengCheng Wan <chengcheng.st@gmail.com>
 */

module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'airbnb-typescript/base',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2019,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
