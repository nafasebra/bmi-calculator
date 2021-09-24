import React from 'react'

function Form() {
    return (
        <div className="form-container">
            <label htmlFor="height">your Height (cm)</label>
            <input type="number" id="height" placeholder="your Height (cm unit)"/>
            <label htmlFor="weight">your Weight (kg)</label>
            <input type="number" id="weight" placeholder="your Weight (kg unit)"/>
        </div>
    )
}

export default Form;
