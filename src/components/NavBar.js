import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav-bar">
            <ul className="nav-bar-ul">
                <li>
                    <NavLink className="nav-bar-link" style={{ color: 'red' }} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/user">User</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/filter">Filter</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;