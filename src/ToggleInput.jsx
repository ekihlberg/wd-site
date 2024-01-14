import React, { useState } from 'react';


function ToggleInput() {
    const [isToggled, setIsToggled] = useState(false);
    const [extraInputValue, setExtraInputValue] = useState('');

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
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
                    value={extraInputValue}
                    onChange={(e) => setExtraInputValue(e.target.value)}
                    placeholder="ex. Jordnötter "
                />
                </label>
                </div>
                
            )}
        </div>
    );
}

export default ToggleInput;
