module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script',
        
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-trailing-spaces': 'off',
    '@typescript-eslint/indent': 'off',
    'no-multiple-empty-lines': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    'eol-last': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    'no-tabs': 'off',
    '@typescript-eslint/quotes': 'off',
    'padded-blocks': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'arrow-spacing': 'off'

   


  }
}
