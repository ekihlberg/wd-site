import React, { useState } from 'react';

function WeddingRSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    specialDiet: '',
    showSpecialDiet: false, // Kontrollerar visningen av specialkost-input
    partnerName: '',
    partnerEmail: '',
    partnerSpecialDiet: '',
    showPartnerSection: false, // Kontrollerar visningen av partner-OSA-sektionen
  });

  // Hantera ändringar i formuläret
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  // Hantera formulärinskickning
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logga inskickad data eller skicka till en server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='rsvp_section'>
      <h3>OSA</h3>
      <h2>Kommer du?</h2>
      <p>Oavsett om ni kommer eller inte vill vi gärna att ni fyller i formuläret nedan.</p>
      <form 
        className="wedding-rsvp-form" 
        name="weddingRSVP" 
        method="POST" 
        data-netlify="true" 
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="weddingRSVP" />

        <label>
          För- och efternamn:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ex. Emma Kihlberg"
          />
        </label>

        <label>
          E-postadress:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ex. exempel@gmail.com"
          />
        </label>

        <div>
          <input
            type="radio"
            id="attending"
            name="attendance"
            value="attending"
            checked={formData.attendance === 'attending'}
            onChange={handleChange}
          />
          <label htmlFor="attending">Jag kommer</label>

          <input
            type="radio"
            id="not-attending"
            name="attendance"
            value="not-attending"
            checked={formData.attendance === 'not-attending'}
            onChange={handleChange}
          />
          <label htmlFor="not-attending">Jag kan inte komma</label>
        </div>

        <label>
          Specialkost
          <input
            type="checkbox"
            name="showSpecialDiet"
            checked={formData.showSpecialDiet}
            onChange={handleChange}
          />
        </label>
        {formData.showSpecialDiet && (
          <label>
            Specialkost:
            <input
              type="text"
              name="specialDiet"
              value={formData.specialDiet}
              onChange={handleChange}
              placeholder="ex. Glutenfri"
            />
          </label>
        )}

        <div style={{ marginTop: '20px' }}>
          <a href="#!" onClick={() => setFormData({ ...formData, showPartnerSection: !formData.showPartnerSection })}>
            {formData.showPartnerSection ? '- Dölj OSA för din partner' : '+ Osa för din partner'}
          </a>
        </div>

        {formData.showPartnerSection && (
          <div>
            <label>
         För- och efternamn:
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                placeholder="ex. Tobias Eherendahl"
              />
            </label>

            <label>
             E-postadress:
              <input
                type="email"
                name="partnerEmail"
                value={formData.partnerEmail}
                onChange={handleChange}
                placeholder="ex. exempel@gmail.com"
              />
            </label>

            <label>
              Partner Specialkost:
              <input
                type="text"
                name="partnerSpecialDiet"
                value={formData.partnerSpecialDiet}
                onChange={handleChange}
                placeholder="Ange eventuella matrestriktioner"
              />
            </label>
          </div>
        )}

        <div className='button_wrapper'>
          <button type="submit">Skicka</button>
        </div>
      </form>
    </div>
  );
}

export default WeddingRSVPForm;
