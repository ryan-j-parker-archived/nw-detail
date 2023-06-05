import React from 'react';
import './Packages.css';

function Card({ title, priceRange, details }) {
  const price = priceRange.match(/\$\d+-\d+ per foot/)[0];
  const remainingText = priceRange.replace(price, '');

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-priceRange">
        <span className="price">{price}</span>
        <span className="remaining-text">{remainingText}</span>
      </p>
      <ul className="card-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Packages() {
  const cardsData = [
    {
      title: 'Complete Detail',
      priceRange: '$25-50 per foot, depending on the condition of your boat.',
      details: ['Includes full interior and exterior detail'],
    },
    {
      title: 'Boat Interior Detail',
      priceRange: '$20-25 per foot, depending on the condition of your boat.',
      details: [
        'Mildew and Stain Removal from Vinyl',
        'Cleaning and Conditioning of Vinyl Cushions and Panels',
        'Window Cleaning',
        'Cleaning of Cubbies and Cup Holders',
        'Carpet Vacuuming and Shampooing',
        'Chrome Wiping and Polishing',
      ],
    },
    {
      title: 'Boat Exterior Detail',
      priceRange: '$25-30 per foot, depending on the condition of your boat.',
      details: [
        'Pressure Wash and Foam Cannon to Remove Surface Contaminants and Dirt/Debris from Rail',
        'Wash and Rinse',
        'Oxidation Removal (Compound)',
        'Waxing and Polishing for Shine',
      ],
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
