import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { CartContextProvider } from "./context/CartContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


