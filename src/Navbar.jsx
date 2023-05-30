import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#services">About</a>
      <a href="#packages">Services</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Navbar;
