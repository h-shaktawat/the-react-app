import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';

export default function User() {
    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                <li>
                    <Link to="/user/hemendra">Hemendra</Link>
                </li>
                <li>
                    <Link to="/user/divya">Divya</Link>
                </li>
            </ul>
        </div>
    )
}