import React from 'react';
import './Packages.css';

export default function Packages() {
  return (
    <div className="packages">
      <p className="detail">We offer the following packages:</p>
      <ul className="package-list">
        <li>Complete Detail: $25-50 per foot, depending on the condition of your boat.</li>
        <li>
          Boat Interior Detail: $20-25 per foot, depending on the condition of your boat. This
          includes:
        </li>
        <ul>
          <li>Mildew and Stain Removal from Vinyl</li>
          <li>Cleaning and Conditioning of Vinyl Cushions and Panels</li>
          <li>Window Cleaning</li>
          <li>Cleaning of Cubbies and Cup Holders</li>
          <li>Carpet Vacuuming and Shampooing</li>
          <li>Chrome Wiping and Polishing</li>
        </ul>
        <li>
          Boat Exterior Detail: $25-30 per foot, based on the condition of your boat. This includes:
        </li>
        <ul>
          <li>
            Pressure Wash and Foam Cannon to Remove Surface Contaminants and Dirt/Debris from Rail
          </li>
          <li>Wash and Rinse</li>
          <li>Oxidation Removal (Compound)</li>
          <li>Waxing and Polishing for Shine</li>
        </ul>
      </ul>
      <p className="custom">You can choose a complete wash and wax or customize your detail.</p>
    </div>
  );
}
