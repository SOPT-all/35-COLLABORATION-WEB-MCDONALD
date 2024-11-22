import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { Global, ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
