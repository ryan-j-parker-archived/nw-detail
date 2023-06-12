/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FormComponent.css';

// function FormComponent() {
//   const form = useRef();

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_i70vkk5', 'template_ey1rxy2', e.target, 'xKFk6ZSEiYrwgvG7V').then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   }

//   return (
//     <div className="form-box">
//       <form ref={form} onSubmit={sendEmail} className="contact-form">
//         <label>Name</label>
//         <input type="text" name="client_name" required />
//         <label>Phone</label>
//         <input type="tel" format="(###) ###-####" name="client_phone" required />
//         <label>Vehicle type</label>
//         <div className="radio-box">
//           <div className="RV">
//             <label>RV</label>
//             <input type="radio" name="vehicle_type" value="RV" required />
//           </div>
//           <div className="Boat">
//             <label>Boat</label>
//             <input type="radio" name="vehicle_type" value="Boat" required />
//           </div>
//         </div>
//         <label>Vehicle length</label>
//         <input type="number" name="vehicle_length" required></input>
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// }

// export default FormComponent;

function FormComponent() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleLength, setVehicleLength] = useState('');

  const handlePhoneNumberChange = (event) => {
    let input = event.target.value;
    let numbers = input.replace(/\D/g, '');
    let match = numbers.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    let formatted = `${match[1] ? '(' + match[1] : ''}${match[2] ? ') ' + match[2] : ''}${
      match[3] ? '-' + match[3] : ''
    }`;
    setPhoneNumber(formatted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', { name, phoneNumber, vehicleType, vehicleLength });
    emailjs.sendForm('service_i70vkk5', 'template_ey1rxy2', event.target, 'xKFk6ZSEiYrwgvG7V').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setName('');
    setPhoneNumber('');
    setVehicleType('');
    setVehicleLength('');
    alert('Your request has been sent. We look forward to working with you!');
  };

  return (
    <>
      <div className="form-box">
        <div className="request-form">
          <p className="quote-request">Request a quote!</p>
          <form className="form" onSubmit={handleSubmit} id="contact">
            <label htmlFor="client_name">Name:</label>
            <input
              id="client_name"
              type="text"
              value={name}
              name="client_name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="client_phone">Phone number:</label>
            <input
              id="client_phone"
              type="tel"
              pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
              value={phoneNumber}
              name="client_phone"
              onChange={handlePhoneNumberChange}
            />
            {/* <p className="type-vehicle">Type of vehicle:</p>
          <div className="radio">
            <label>RV</label>
            <input
              type="radio"
              value="RV"
              checked={vehicleType === 'RV'}
              onChange={(e) => setVehicleType(e.target.value)}
            />
            <label>Boat</label>
            <input
              type="radio"
              value="Boat"
              checked={vehicleType === 'Boat'}
              onChange={(e) => setVehicleType(e.target.value)}
            />
          </div>
          <label>Vehicle length:</label>
          <input
            type="number"
            value={vehicleLength}
            onChange={(e) => setVehicleLength(e.target.value)}
            min="0"
          />
          ft. */}
            <label htmlFor="client_message">Message:</label>
            <textarea
              id="client_message"
              name="client_message"
              placeholder="Please include the type of vehicle and length."
              cols={32}
              rows={10}
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormComponent;
