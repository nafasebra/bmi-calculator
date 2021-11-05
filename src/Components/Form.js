import React, { useState } from 'react'

// import component
import Popup from './Popup';

// styles of component
import './Form.css';

function Form() {

    const [openPopup, setOpenPopup] = useState(false);

    // the states for store of height and weight value inputs
    const [ height, setHeight ] = useState('');
    const [ weight, setWeight ] = useState('');

    const [ result, setResult ] = useState(0);

    
    const changeHeight = (eve) => {
        let value = eve.target.value;
        let regex = /^[0-9]*$/;

        if(value.match(regex))
            setHeight(value);
    }

    const changeWeight = (eve) => {
        let value = eve.target.value;
        let regex = /^[0-9]*$/;
        
        if(value.match(regex))
            setWeight(value);
    }

    const calculate = () => {
        // setOpenPopup(true);

        if(height !== '' && weight !== ''){
            setResult((weight / height / height) * 10000);
        }
    }


    return (
        <div className="form-container">
            <div>
                <p>Input your Weight and Height and get your BMI.</p>
                <p className="text-bold">Please enter numeric data</p>
                <div className="form-control">
                    <input 
                        type="text" 
                        required 
                        value={height}
                        onChange={(e) => changeHeight(e)}
                    />
                    <label htmlFor="height">your Height (cm)</label>
                </div>
                <div className="form-control">
                    <input 
                        type="text" 
                        required 
                        value={weight}
                        onChange={(e) => changeWeight(e)}
                    />
                    <label htmlFor="weight">your Weight (kg)</label>
                </div>
                <button className="btn" onClick={() => calculate()}>
                    <span>CALCULATE</span>
                    <svg width="15px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>

            <Popup 
                status={openPopup} 
                setFalse={() => setOpenPopup(false)} 
            />
        </div>
    )
}

export default Form;
