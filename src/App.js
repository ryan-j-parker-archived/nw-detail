import logo from './nw-detail-icon.png';
import './App.css';
import About from './components/About/About';
import React from 'react';
import logosvg from './nw-detail-scroll-banner2.svg';
import logo2 from './nw-detail2.svg';
import logoFix from './nw-detail-fix.png';
import nwDetailLogo from './nw-detail-fix.svg';
import FormComponent from './FormComponent';
import Logo from './Logo';
import logoGoldWhite from './nw-detail-gold-white-dots.svg';
import Specialize from './Specialize';
import Packages from './Packages';
import Ceramic from './Ceramic';
import FooterContact from './FooterContact';
import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';
import RestoreReady from './RestoreReady';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <div className="image-box">
          <img src={logoGoldWhite} />
          <div className="nwd-title"></div>
        </div>
      </header> */}
      <div className="top-box">
        <div className="logo-box">
          <Logo />
        </div>
        <div className="phone-number">971-712-9498</div>
        <div className="line" />
        <About />
        <div className="line" />
        <RestoreReady />
      </div>
      <div className="bottom-box">
        <ImageCarousel />
        <Specialize />
        <Packages />
        <Ceramic />
        <FooterContact />
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
