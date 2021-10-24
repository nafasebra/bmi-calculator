import React, { useState } from 'react'

// import component
import Popup from './Popup';

// styles of component
import './Form.css';

function Form() {

    const [openPopup, setOpenPopup] = useState(false);
    
    // const calculate = () => {
    //     setOpenPopup(true);
    // }

    return (
        <div className="form-container">
            <div>
                <p>Input uarnyour Weight and Height and get your BMI.</p>
                <div className="form-control">
                    <input type="text" required id="height"/>
                    <label htmlFor="height">your Height (cm)</label>
                </div>
                <div className="form-control">
                    <input type="text" required id="weight"/>
                    <label htmlFor="weight">your Weight (kg)</label>
                </div>
                <button className="btn" onClick={() => setOpenPopup(true)}>
                    <span>CALCULATE</span>
                    <svg width="15px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>

            <Popup status={openPopup} setFalse={() => setOpenPopup(false)} />
        </div>
    )
}

export default Form;
