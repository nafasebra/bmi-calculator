import React, { useState } from 'react';

// import components
import Form from './Components/Form';
import Navbar from './Components/Navbar';

// import styles of app
import './App.css';

// import styled components
import LightTheme from './Components/theme/LightTheme'
import DarkTheme from './Components/theme/DarkTheme'


function App () {

    // if value of false, theme is light
    // and if value of true, theme is dark
    const [ theme, setTheme ] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    console.log(LightTheme);
    console.log(DarkTheme);

    return (
        <div className="app">
            <Navbar changeTheme={toggleTheme} theme={theme}/>

            <Form />
        </div>
    )
}

export default App;
