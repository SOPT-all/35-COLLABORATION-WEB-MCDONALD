import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
