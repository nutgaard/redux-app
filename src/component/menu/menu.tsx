import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <NavLink activeClassName="menu__link--active" className="menu__link" to="/home">Home</NavLink>
            <NavLink activeClassName="menu__link--active" className="menu__link" to="/about">About</NavLink>
        </div>
    );
}

export default Menu;
