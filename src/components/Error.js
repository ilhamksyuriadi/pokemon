import React from 'react';
import './Error.css';
import PidgeyBack from '../assets/pidgey-back.png';

const Error = () => {
    return (
        <div className="error-layout">
            <div>
                <img src={PidgeyBack} alt="pidgey"></img>
                <h4>somethings wrong :( please make sure your connection and use <span className="red-text">CORS</span> extensions on your browser</h4>
            </div>
        </div>
    )
}

export default Error