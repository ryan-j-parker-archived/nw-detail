import logo from './nw-detail-icon.png';
import './App.css';
import About from './About';
import React from 'react';
import logosvg from './nw-detail-scroll-banner2.svg';
import logo2 from './nw-detail2.svg';
import logoFix from './nw-detail-fix.png';
import nwDetailLogo from './nw-detail-fix.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-box">
          <img src={logosvg} />
          <div className="nwd-title"></div>
        </div>
      </header>
      <About />
    </div>
  );
}

export default App;
