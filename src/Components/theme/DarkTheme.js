import styled from 'styled-component';

function DarkTheme(){
    let darkBox = styled.div `
        background-color: #2c3e50;
        color: #aaaaaa;
    `

    let darkInput = styled.input `
        color: #aaaaaa;
    `

    let darkLabel = styled.label `
        background-color: #2c3e50;
        color: #aaaaaa;
    `

    return {
        darkBox,
        darkInput,
        darkLabel
    }
}

export default DarkTheme;