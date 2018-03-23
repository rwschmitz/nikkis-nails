import React from 'react';
import '../css/button.css';

const Button = ( { btnContent, navigateApp } ) => (
  <button onClick={ navigateApp } className="btn">{ btnContent }</button>
);

export default Button;
