const path = require('path');

const resolve = item => {
  return path.join(__dirname, '../', item);
};
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal(config, { configType }) {
    // customize the Vite config here
    Object.assign(config.resolve.alias, {
      api: resolve('src/api'),
      contracts: resolve('src/contracts'),
      features: resolve('src/features'),
      shared: resolve('src/shared'),
      models: resolve('src/models'),
      pages: resolve('src/pages'),
      typings: resolve('src/typings'),
      assets: resolve('src/assets'),
    });
    config.define = { 'process.env.NODE_DEBUG': 'false' };
    // return the customized config
    return config;
  },
};
