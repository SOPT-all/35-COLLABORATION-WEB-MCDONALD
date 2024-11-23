import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
