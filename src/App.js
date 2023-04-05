import logo from './nw-detail-icon.png';
import './App.css';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-box">
          <img
            src={logo}
            className="nwd-logo"
            alt="logo"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
          <div className="nwd-title"></div>
        </div>
      </header>
      <About />
    </div>
  );
}

export default App;
