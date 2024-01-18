import React, { useState } from 'react';
import axios from 'axios';
import ToggleInput from './ToggleInput.jsx'; 
import Xosa from './Xosa.jsx'; 

function WeddingRSVPForm() {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [specialDiet, setSpecialDiet] = useState('');
  const [additionalGuests, setAdditionalGuests] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [extraInputValue, setExtraInputValue] = useState('');
  const [showFields, setShowFields] = useState(false);

  const handleToggleClick = () => {
    setShowFields(!showFields);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data for submission
    const formData = {
      Name: fullName,
      Email: '', // Add the primary attendee's email here if available
      answer: attendance,
      Specialkost: specialDiet,
      Name2: guestName, // Include the additional guest's name
      Email2: guestEmail, // Include the additional guest's email
      Specialkost2: specialDiet,
    };

    axios.post("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzyw43mcpHdFaWgwiu1i94jTQ3N4Pu_OEUPxaeEIGkr_yR0MMX4EbAEnljef4VfeWo8TQ/exec", formData)
    .then(response => {
      console.log(response.data);
      alert('Form submitted. Thank you!');
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while submitting the form. Please try again later.');
    });
  
  };

  

  return (
    <div className='rsvp_section'>
      <h3>OSA</h3>
      <h2>Kommer du?</h2>
      <p>Oavsett om ni kommer eller inte vill vi grärna att ni fyller i formuläret nedan.</p>
      <form onSubmit={handleSubmit} className="wedding-rsvp-form">
        <label>
          För- och efternamn:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name='name'
            placeholder="ex. Emma Kihlberg"
          />
        </label>

        {/* Attendance Radio Buttons */}
        <div className='osa_toggle'>
          <input
            type="radio"
            value="attending"
            id='can'
            checked={attendance === 'attending'}
            onChange={() => setAttendance('attending')}
          />
          <label htmlFor='can'>
            Jag kommer gärna på ert bröllop
          </label>
          <input
            type="radio"
            id='cant'
            value="not-attending"
            checked={attendance === 'not-attending'}
            onChange={() => setAttendance('not-attending')}
          />
          <label htmlFor="cant">
            Jag kan tyvärr inte komma och fira
          </label>
        </div>

        <label>
          <input
            type="checkbox"
            checked={isToggled}
            onChange={handleToggle}
          />
          Specialkost
        </label>

        {isToggled && (
          <div className='food_field'>
            <label>
              Specialkost:
              <input
                type="text"
                name='Specialkost2'
                value={extraInputValue}
                onChange={(e) => setExtraInputValue(e.target.value)}
                placeholder="ex. Jordnötter"
              />
            </label>
          </div>
        )}

        <label>
          E-postadress
          <input type="email" name='email2' placeholder="ex. exempel@gmail.com" />
        </label>

        <Xosa handleToggleClick={handleToggleClick} showFields={showFields} />

        <div className='button_wrapper'>
          <button type="submit">Skicka</button>
        </div>
      </form>
    </div>
  );
}

export default WeddingRSVPForm;
