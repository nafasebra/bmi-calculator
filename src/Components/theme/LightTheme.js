import styled from 'styled-component';

function LightTheme(){
    let lightBox = styled.div `
        background-color: #ffffff;
        color: #707070;
    `

    let lightInput = styled.input `
        color: #707070;
    `

    let lightLabel = styled.label `
        background-color: #ffffff;
        color: #707070;
    `

    return {
        lightBox,
        lightInput,
        lightLabel
    }
}

export default LightTheme;