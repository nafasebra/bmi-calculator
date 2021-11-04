import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.backgroundBody};
    }
`

export const LightTheme = {
    backgroundBody: '#ffffff',
    colorBody: '#707070',
    backgroundLabel: '#ffffff',
    colorLabel: '#707070'
}

export const DarkTheme = {
    backgroundBody: '#2c3e50',
    colorBody: '#ffffff',
    backgroundLabel: '#2c3e50',
    colorLabel: '#ffffff'
}