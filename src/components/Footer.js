import React from 'react';
import './Footer.css';
import GameFreakLogo from '../assets/game-freak.png';

const Footer = () => {
    return (
        <footer>
            <div>
                <img className="game-freak-logo" src={GameFreakLogo}></img>
                <p>game freak</p>
            </div>
        </footer>
    )
}

export default Footer