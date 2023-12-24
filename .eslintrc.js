module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add your custom rules here, if needed
    },
  };