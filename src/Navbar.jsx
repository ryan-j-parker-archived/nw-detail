import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <button className="navbar-toggler" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <div className={`navbar-menu ${open ? 'open' : ''}`}>
        <a href="#services">About</a>
        <a href="#packages">Services</a>
        <a href="#contact">Request a quote!</a>
      </div>
    </div>
  );
}

export default Navbar;
