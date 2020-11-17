import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Pokemon App</h1>
            <nav>
                <NavLink activeClassName="nav-active" to="/">
                    <h3 className="nav-item">Pokemon List</h3>
                </NavLink>
                <NavLink activeClassName="nav-active" to="/mypokemon">
                    <h3 className="nav-item">My Pokemon</h3>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;