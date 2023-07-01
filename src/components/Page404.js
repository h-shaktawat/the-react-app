import React, { Component } from 'react';
import { useNavigate } from 'react-router';

export default function Page404() {

    const navigate = useNavigate();

    return (
        <div>
            <h2>
                404 Page Not Fount!
            </h2>
            <h4>
                <button onClick={() => navigate('/')} >Go to Home!</button>
            </h4>
        </div>
    )
}