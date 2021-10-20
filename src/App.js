import React from 'react';

// import components
import Form from './Components/Form';
import Popup from './Components/Popup';

// import styles of app
import './App.css';


function App () {
    return (
        <div className="app">
            <h2 className="app-name">BMI Calculator</h2>

            <Form />
            <Popup />
        </div>
    )
}

export default App;
