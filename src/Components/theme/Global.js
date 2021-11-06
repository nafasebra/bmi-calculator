import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // i could merge this bellow the styles,
    // but i was found the bug and forced :))
    
    body{
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
    }

    label{
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
    }

    .popup{
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
    }

    .navbar{
        box-shadow: ${({ theme }) => theme.navbarShadow};
    }
`

export const LightTheme = {
    background: '#f3f3f3',
    color: '#707070',
    navbarShadow: ' 0 0 10px #dfdfdfaa'
}

export const DarkTheme = {
    background: '#1e272e',
    color: '#dfdfdf',
    navbarShadow: ' 0 0 10px #212121dd'
}