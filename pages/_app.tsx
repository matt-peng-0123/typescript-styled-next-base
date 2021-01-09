import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import theme from "../theme";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
