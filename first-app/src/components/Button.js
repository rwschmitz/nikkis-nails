import React from 'react';
import '../css/button.css';

const Button = ({btnContent, startApp}) => (
  <button onClick={startApp} className="btn">{btnContent}</button>
);

export default Button;
