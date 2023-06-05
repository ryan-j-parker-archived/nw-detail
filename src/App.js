import './App.css';
import About from './components/About/About';
import React from 'react';
import FormComponent from './FormComponent';
import Logo from './Logo';
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
      <div className="top-box">
        <div className="logo-box">
          <Logo />
        </div>
        <div className="phone-number">971-712-9498</div>
        <div className="line" />
        <About />
        <div className="line" />
        <div className="line-break" />
        <RestoreReady />
      </div>
      <div className="bottom-box">
        <ImageCarousel />
        <div className="line-break line2" />
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
