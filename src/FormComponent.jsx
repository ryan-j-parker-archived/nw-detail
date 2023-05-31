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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', { name, phoneNumber, vehicleType, vehicleLength });
    // Handle form submission here
    emailjs.sendForm('service_i70vkk5', 'template_ey1rxy2', event.target, 'xKFk6ZSEiYrwgvG7V').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Phone number:</label>
      <input
        type="tel"
        pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="radio">
        Type of vehicle:
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
      ft.
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
