import React, { useState } from 'react';
import ToggleInput from './ToggleInput.jsx';
import Xosa from './Xosa.jsx';

function WeddingRSVPForm() {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [extraInputValue, setExtraInputValue] = useState('');
  const [email, setEmail] = useState(''); // Added state for email
  const [showFields, setShowFields] = useState(false);

  const handleToggleClick = () => {
    setShowFields(!showFields);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // No need for handleSubmit function

  return (
    <div className='rsvp_section'>
      <h3>OSA</h3>
      <h2>Kommer du?</h2>
      <p>Oavsett om ni kommer eller inte vill vi grärna att ni fyller i formuläret nedan.</p>
      <form className="wedding-rsvp-form" name="weddingRSVP" method="POST" data-netlify="true" netlify>
        {/* Netlify requires a hidden input for form-name to correctly process submissions from React/JS */}
        <input type="hidden" name="form-name" value="weddingRSVP" />
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
          <input
            type="email"
            name='email'
            value={email} // Use state for value
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            placeholder="ex. exempel@gmail.com"
          />
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