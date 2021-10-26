import React from 'react';

// import components
import Form from './Components/Form';
import Navbar from './Components/Navbar';

// import styles of app
import './App.css';


function App () {
    return (
        <div className="app">
            <Navbar />

            <Form />
        </div>
    )
}

export default App;
