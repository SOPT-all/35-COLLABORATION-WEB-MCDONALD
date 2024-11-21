import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import Footer from "@components/footer/footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
