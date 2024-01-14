import React, { useState } from 'react';
import ToggleInput from './ToggleInput.jsx'; 

function Xosa() {
  const [showFields, setShowFields] = useState(false);

  const handleToggleClick = () => {
    setShowFields(!showFields);
  };

  return (
    <div>
      <a href="#osa" className={showFields ? 'xosa_rem' : 'xosa_add'} onClick={handleToggleClick}>
        {showFields ? '' : '+ Osa för din respektive'}
      </a>
      
      {showFields && (
        <div className='xosa_box'>
           
        <label>
            För- och efternamn
          <input type="text" name='Name2' placeholder="ex. Tobias Eherendahl" />
        </label>
        <label>
            E-postadress
          <input type="email" name='email2' placeholder="ex. exempel@gmail.com" />
          
        </label>

            <ToggleInput></ToggleInput>

          <a href="#osa" id='osa' className='xosa_rem' onClick={handleToggleClick}>X</a>
          
        </div>
      )}
    </div>
  );
}

export default Xosa;
