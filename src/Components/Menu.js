import React from 'react';
import { useState } from 'react';
/* Add any imports you think you might need here! */

const Menu = () => { 
    const [color] = useState(0) 
    return (
      <div className="colorOptions">
          <button color='colorOptions'></button>
          <p color='colorOptions'>Post</p>
      </div>
    );
}

export default Menu;