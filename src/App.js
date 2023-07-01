import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import User from './components/User';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      {/* Load Component Here... */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user/:name" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
