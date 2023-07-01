import React, { Component } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <h2>Connect with social media!</h2>
            <br />
            <Link to="company">Company</Link>
            <br />
            <Link to="channel">Channel</Link>
            <Outlet></Outlet>
        </div>
    )
}