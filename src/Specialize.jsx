import React from 'react';
import './Specialize.css';

// export default function Specialize() {
//   return (
//     <div className="specialize">
//       <p className="spec">We specialize in the following services:</p>
//       <ul className="specialties">
//         <li>Waxing and Polishing</li>
//         <li>Compounding and Oxidation Removal</li>
//         <li>Pressure Washing</li>
//         <li>Vinyl Cleaning and Protection</li>
//         <li>Acid Wash</li>
//         <li>Chrome Polishing</li>
//         <li>Carpet Vacuuming and Shampooing</li>
//         <li>Window Cleaning</li>
//       </ul>
//     </div>
//   );
// }

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
      <h3 className="spec-card-title">{title}</h3>
      <ul className="spec-card-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default Specialize;
