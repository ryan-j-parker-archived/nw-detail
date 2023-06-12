import './App.css';
import About from './components/About/About';
import React from 'react';
import FormComponent from './components/Form/FormComponent';
import Logo from './components/Logo/Logo';
import Specialize from './components/MainContent/Specialize';
import Packages from './components/MainContent/Packages';
import Ceramic from './components/MainContent/Ceramic';
import FooterContact from './components/Footer/FooterContact';
import Navbar from './components/Navbar/Navbar';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import RestoreReady from './components/MainContent/RestoreReady';
import Footer from './components/Footer/Footer';
import logo from './nw-detail-icon-simple.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="top-box"> */}
      <div className="logo-box">
        {/* <Logo /> */}
        <img src={logo} />
      </div>
      <div className="phone-number">971-712-9498</div>
      <div className="line" />
      <About />
      <div className="bg-fade" />
      <div className="bg-box">
        <div className="line" />
        <div className="line-break" />
        <RestoreReady />
        <div className="bottom-box">
          <ImageCarousel />
          <div className="line-break line2" />
          <Specialize />
          <Packages />
          <Ceramic />
          <FooterContact />
          <FormComponent />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
