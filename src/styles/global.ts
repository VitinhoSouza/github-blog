import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }


    body{
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
    }


    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }

`
