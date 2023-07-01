import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import User from './components/User';
import UserDetails from './components/UserDetails';
import FilterWithParams from './components/FilterWithParams';
import Contact from './components/Contact';
import Company from './components/contact/Company';
import Channel from './components/contact/Channel';

function App() {
  return (
    <div className="App">
      {/* Load Component Here... */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<FilterWithParams />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:name" element={<UserDetails />} />
          <Route path="/contact/" element={<Contact />} >
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
