const path = require('path');
const { mergeConfig } = require('vite');
const viteTsConfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-designs', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './'),
          src: path.resolve(__dirname, '../src'),
        },
        dedupe: ['@storybook/client-api'],
      },
      plugins: [
        viteTsConfigPaths({
          root: '../',
        }),
      ],
    });
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};
