import React from 'react'

// styles of component
import './Form.css';

function Form() {
    return (
        <div className="form-container">
            <div>
                <div className="form-control">
                    <input type="text" required id="height"/>
                    <label htmlFor="height">your Height (cm)</label>
                </div>
                <div className="form-control">
                    <input type="text" required id="weight"/>
                    <label htmlFor="weight">your Weight (kg)</label>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Form;
