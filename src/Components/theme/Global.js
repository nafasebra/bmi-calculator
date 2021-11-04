import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, label, .popup{
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
    }

    .navbar{
        box-shadow: ${({ theme }) => theme.navbarShadow};
    }
`

export const LightTheme = {
    background: '#ffffff',
    color: '#707070',
    navbarShadow: ' 0 0 10px #f0f0f0'
}

export const DarkTheme = {
    background: '#2c3e50',
    color: '#ffffff',
    navbarShadow: ' 0 0 10px #21212177'
}