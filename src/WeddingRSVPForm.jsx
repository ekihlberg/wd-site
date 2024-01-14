import React, { useState } from 'react';
import ToggleInput from './ToggleInput.jsx'; 
import Xosa from './Xosa.jsx'; 
function WeddingRSVPForm() {
    const [fullName, setFullName] = useState('');
    const [attendance, setAttendance] = useState('');
    const [specialDiet, setSpecialDiet] = useState('');
    const [additionalGuests, setAdditionalGuests] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form data here
        console.log({ fullName, attendance, specialDiet, additionalGuests });
        alert('Form submitted. Thank you!');
    };

    return (
        <><div className='rsvp_section'><h3>OSA</h3><h2>Kommer du?</h2><p>Oavsett om ni kommer eller inte vill vi grärna att ni fyller i formuläret nedan.
        </p><form onSubmit={handleSubmit} className="wedding-rsvp-form">
                <label>
                    För- och efternamn:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="ex. Emma Kihlberg" />
                </label>
                <div className='osa_toggle'>


                    <input
                        type="radio"
                        value="attending"
                        id='can'
                        checked={attendance === 'attending'}
                        onChange={() => setAttendance('attending')}
                    ></input>
                    <label for='can'>
                        Jag kommer gärna på ert bröllop </label>




                    <input
                        type="radio"
                        id='cant'
                        value="not-attending"
                        checked={attendance === 'not-attending'}
                        onChange={() => setAttendance('not-attending')}
                    ></input>
                    <label for="cant">
                        Jag kan tyvärr inte komma och fira </label>

                </div>
                <ToggleInput></ToggleInput>
                <Xosa></Xosa>

                <div className='button_wrapper'>
                    <button type="submit">Skicka</button></div>
            </form>
            </div></>
    );
}

export default WeddingRSVPForm;
