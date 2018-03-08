import React from 'react';
import '../css/button.css';

/* Use an arrow function because this is a stateless component */
const Button = ({btnContent, startApp}) => (
  <button onClick={startApp} className="btn">{btnContent}</button>
);

export default Button;
