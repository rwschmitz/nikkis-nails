import React from 'react';
import '../css/button.css';

/* Use an arrow function because this is a stateless component */
const Button = ({btnContent, navigateApp}) => (
  <button onClick={navigateApp} className="btn">{btnContent}</button>
);

export default Button;
