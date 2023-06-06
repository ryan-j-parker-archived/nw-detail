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
        {/* <div className={`navbar-links ${open ? 'open' : ''}`}> */}
        <a className="navbar-link" href="#about">
          About
        </a>
        <a className="navbar-link" href="#packages">
          Services
        </a>
        <a className="navbar-link" href="#contact">
          Request a quote!
        </a>
      </div>
    </div>
  );
}

export default Navbar;
