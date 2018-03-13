import React from 'react';
import '../css/header.css';

/*
*  Using implicit return with an arrow function.
*/
const Header = ({leftHeadline, rightHeadline}) => (
  <header className="header">
    <div className="headline headline--left">{leftHeadline}</div>
    <div className="headline headline--right">{rightHeadline}</div>
  </header>
);

export default Header;
