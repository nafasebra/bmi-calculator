import React from 'react'

// import styles of popup
import './Popup.css';

function Popup({ status, setFalse }) {

    return (
        <>
            {
                status ?
                <div className="popup-container">
                    <div className="popup">
                        <div className="popup-header">
                            <h4 className="popup-title">your result:</h4>
                            <button onClick={() => setFalse()}>
                                <svg width="20px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="popup-body">
                            <h1>22.5</h1>
                            <h3>Good weight</h3>

                            <button className="btn" onClick={() => setFalse()}>
                                OK! I get
                            </button>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}

export default Popup;