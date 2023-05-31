import React from 'react';
import './RestoreReady.css';

export default function RestoreReady() {
  return (
    <div className="call">
      {/* <img className="q-mark" src="/question-mark.svg" alt="question mark" /> */}
      {/* <p className="call-text">
        Whether you&apos;re looking to restore your boat, prepare it for sale, or getting it ready
        for the season, allow us to make your boat truly shine and stand out with our meticulous
        detailing service!
      </p> */}
      <div className="call-text-cards">
        <p className="call-card">Restoring your boat?</p>
        <br />
        <p className="call-card">Preparing for sale?</p>
        <br />
        <p className="call-card">Getting ready for the season?</p>
        <br />
      </div>
      <p className="call-text-let-us call-card">
        Let us make your boat truly shine and stand out with our meticulous detailing service!
      </p>
    </div>
  );
}
