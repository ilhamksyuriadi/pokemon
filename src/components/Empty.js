import React from 'react';
import './Empty.css';
import PidgeyBack from '../assets/pidgey-back.png';

const Empty = () => {
    return (
        <div className="empty-layout">
            <div>
                <img src={PidgeyBack} alt="pidgey"></img>
                <h4>you don't have any pokemon yet</h4>
            </div>
        </div>
    )
}

export default Empty