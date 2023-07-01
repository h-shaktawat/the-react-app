import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FilterWithParams() {

    const [searchParams, setSearchParams] = useSearchParams();

    const age = searchParams.get('age');
    const city = searchParams.get('city');

    return (
        <div>
            <h2>Hello from Filter with Params</h2>
            <br />
            <h3>Age is :: {age}</h3>
            <h3>City is :: {city}</h3>
            <br />
            <input type="text" onChange={(e) => setSearchParams({ age: e.target.value })} placeHolder="enter your age" />
            <br />
            <input type="text" onChange={(e) => setSearchParams({ city: e.target.value })} placeHolder="enter your city" />
        </div>
    )
}