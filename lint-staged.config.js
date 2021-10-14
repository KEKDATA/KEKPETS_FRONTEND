module.exports = {
  '*.{ts,tsx,js,scss}': ['prettier --write'],
  '*.{ts,tsx,js,jsx}': ['eslint'],
  '*{.json,.prettierrc,.eslintrc}': [
    'prettier --write --parser json',
    'git add',
  ],
};
