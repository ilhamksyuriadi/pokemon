import React from 'react';
import './Loading.css';
import PidgeyFront from '../assets/pidgey-front.png';

const Loading = (props) => {
    return (
        <div className="loading-layout">
            <div>
                <img src={PidgeyFront} alt="pidgey"></img>
                <h4>{props.msg}</h4>
            </div>
        </div>
    )
}

export default Loading