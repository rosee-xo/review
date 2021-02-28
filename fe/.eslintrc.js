module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: './tsconfig.json',
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['import', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  rules: {
    'object-curly-newline': ['off'],
    'array-element-newline': ['off', 'consistent'],
    'array-bracket-newline': ['error', 'consistent'],

    'react/jsx-one-expression-per-line': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],

    'max-len': ['off'],

    'no-multiple-empty-lines': ['error'],

    '@typescript-eslint/naming-convention': ['off'],

    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    indent: ['error', 2, { SwitchCase: 1 }],

    'operator-linebreak': ['error', 'before'],

    'consistent-return': 'warn',

    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    '@typescript-eslint/lines-between-class-members': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'class-methods-use-this': 'off',

    'no-console': ['off'],

    'function-paren-newline': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'object-curly-spacing': ['error', 'always'],

    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],

    'react/jsx-curly-brace-presence': ['error', 'ignore'],

    'react/jsx-props-no-spreading': ['error', { html: 'ignore', exceptions: ['Slick'] }],
  },
};
