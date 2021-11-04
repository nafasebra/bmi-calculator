import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, GlobalStyles } from './Components/theme/Global';

// import components
import Form from './Components/Form';
import Navbar from './Components/Navbar';

// import styles of app
import './App.css';



function App () {

    // if value of false, theme is light
    // and if value of true, theme is dark
    const [ theme, setTheme ] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    return (
        <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
            <GlobalStyles />
            <div className="app">
                <Navbar changeTheme={toggleTheme} theme={theme}/>

                <Form />
            </div>
        </ThemeProvider>
    )
}

export default App;
