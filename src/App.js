import React from 'react';

// import components
import Form from './Components/Form';

// import styles of app
import './App.css';


function App () {
    return (
        <div className="app">
            <h2 className="app-name">BMI Calculator</h2>

            <Form />
        </div>
    )
}

export default App;
