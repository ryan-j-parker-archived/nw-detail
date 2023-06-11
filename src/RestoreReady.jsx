import React from 'react';
import './RestoreReady.css';

export default function RestoreReady() {
  return (
    <div className="call">
      <div className="call-text-cards">
        <a className="contact-links" href="#contact">
          <p className="call-card">Restoring your boat?</p>
        </a>

        <br />
        <a className="contact-links" href="#contact">
          <p className="call-card">Preparing for sale?</p>
        </a>

        <br />
        <a className="contact-links" href="#contact">
          <p className="call-card">Getting ready for the season?</p>
        </a>
        <br />
      </div>
      <p className="call-text-let-us call-card">
        <a className="contact-links" href="#contact">
          Let us make your boat truly shine and stand out with our meticulous detailing service!
        </a>
      </p>
    </div>
  );
}
