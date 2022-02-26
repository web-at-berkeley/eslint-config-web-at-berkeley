module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features-old
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin'
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
};
