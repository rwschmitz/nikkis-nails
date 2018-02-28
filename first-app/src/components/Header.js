import React from 'react';
import '../css/header.css';

/*
*  Using implicit return with an arrow function.
*  Using destructuring of props so I can just use {headline} and {subheadline}
*/
const Header = ({headline, subheadline}) => (
  <header className="header">
    <div className="headline">{headline}</div>
    <div className="subheadline">{subheadline}</div>
  </header>
);

export default Header;
