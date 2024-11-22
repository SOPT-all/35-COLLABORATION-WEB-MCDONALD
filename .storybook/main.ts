import type { StorybookConfig } from '@storybook/react-vite';
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@assets': path.resolve(__dirname, '../src/assets'),
        '@constants': path.resolve(__dirname, '../src/constants'),
      };
    }

    return config;
  },
};
export default config;
