import React, { Component } from 'react';
import { useParams } from 'react-router';

export default function UserDetails() {

    const params = useParams();
    const { name } = params;

    return (
        <div className="user-list">
            <h2>Hello {name}</h2>
        </div>
    )
}