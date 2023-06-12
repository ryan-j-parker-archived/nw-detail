import React from 'react';
import './Specialize.css';

function Specialize() {
  const title = 'We specialize in the following services:';
  const details = [
    'Waxing and Polishing',
    'Compounding and Oxidation Removal',
    'Pressure Washing',
    'Vinyl Cleaning and Protection',
    'Acid Wash',
    'Chrome Polishing',
    'Carpet Vacuuming and Shampooing',
    'Window Cleaning',
  ];

  return (
    <div className="spec-card">
      <h3 id="packages" className="spec-card-title">
        {title}
      </h3>
      <ul className="spec-card-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default Specialize;
