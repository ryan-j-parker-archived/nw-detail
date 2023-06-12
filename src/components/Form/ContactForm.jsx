import React from 'react';

export default function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" type="text"></input>
        <label htmlFor="phone">Telephone</label>
        <input name="phone" type="tel"></input>
        <label htmlFor="vehicle-type">Type of vehicle</label>
        <input name="vehicle-type" type="radio">
          <option value="boat">Boat</option>
          <option value="rv">RV</option>
        </input>
        <label htmlFor="length">Length</label>
        <input name="length" type="radio">
          <option value="0-20">0-20</option>
          <option value="21-30">21-30</option>
          <option value="31+">31+</option>
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
