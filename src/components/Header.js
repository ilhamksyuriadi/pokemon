import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Pokemon App</h1>
            <nav>
                <NavLink className="nav-item" exact activeClassName="nav-active" to="/">
                    <p className="nav-text">Pokemon List</p>
                </NavLink>
                <NavLink className="nav-item" exact activeClassName="nav-active" to="/mypokemon">
                    <p className="nav-text">My Pokemon</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;