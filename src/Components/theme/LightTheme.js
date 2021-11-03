import styled from 'styled-component';

function LightTheme(){
    let lightBox = styled.div `
        background-color: #2c3e50;
        color: #aaaaaa;
    `

    let lightInput = styled.input `
        color: #aaaaaa;
    `

    let lightLabel = styled.label `
        background-color: #2c3e50;
        color: #aaaaaa;
    `

    return {
        lightBox,
        lightInput,
        lightLabel
    }
}

export default LightTheme;