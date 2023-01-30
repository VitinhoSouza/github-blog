import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <div style={{marginLeft:"auto", marginRight:"auto", width:"10px"}}>Opa</div>
      <GlobalStyle />
    </ThemeProvider>
    
  )
}
