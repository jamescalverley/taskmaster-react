import React, { useState } from 'react';

function TextArea(props) {
    const [value, setValue] = useState(props.value);
    function handleInputChange(e) {
        setValue(e.target.value);
    }
    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input 
              type="text" 
              className="form-control mb-2" 
              id={props.id}
              onChange={handleInputChange} 
              value={value} 
              placeholder={props.placeholder}
            />
          </div>
        </div>
      </form>
    );
}

export default TextArea;