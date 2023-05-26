import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FormComponent.css';

function FormComponent() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_i70vkk5', 'template_ey1rxy2', e.target, 'xKFk6ZSEiYrwgvG7V').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className="form-box">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="client_name" required />
        <label>Phone</label>
        <input type="tel" format="(###) ###-####" name="client_phone" required />
        <label>Vehicle type</label>
        {/* <div className="radio-group"> */}
        <label>RV</label>
        <input type="radio" name="vehicle_type" value="RV" required>
          {/* RV */}
        </input>
        <label>Boat</label>
        <input type="radio" name="vehicle_type" value="Boat" required>
          {/* Boat */}
        </input>
        {/* </div> */}
        <label>Vehicle length</label>
        <input type="number" name="vehicle_length" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default FormComponent;
