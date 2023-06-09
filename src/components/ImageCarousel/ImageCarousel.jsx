import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel() {
  const images = [
    '/images/boat1-red.jpg',
    '/images/boat2-seats.jpg',
    '/images/boat3-full.jpg',
    '/images/boat4-full.jpg',
    '/images/boat5.jpg',
    '/images/boat6-back.jpg',
    '/images/boat7-full-black.jpg',
    '/images/boat8-before.jpg',
    '/images/boat8-after.jpg',
    '/images/boat9-hull.jpg',
    '/images/boat10-before.jpg',
    '/images/boat10-after.jpg',
    '/images/rv1-side.jpg',
    '/images/rv2-side.jpg',
  ];

  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSourceIndex((sourceIndex + 1) % images.length);
    }, 2000); // Change images every 2 seconds

    return () => {
      clearInterval(timer);
    };
  }, [sourceIndex, images.length]);

  return (
    <div className="image-box">
      <img className="images" src={images[sourceIndex]} alt="carousel" />
    </div>
  );
}
