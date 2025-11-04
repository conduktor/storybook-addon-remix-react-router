import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
  addons: [import.meta.resolve('./local-preset.ts'), '@storybook/addon-docs'],
};

export default config;
