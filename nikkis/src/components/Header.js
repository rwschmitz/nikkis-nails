import React from 'react';
import '../css/header.css';

const Header = ( { leftHeadline, rightHeadline } ) => (
  <header className="header">
    <h1 className="headline headline--left">{ leftHeadline }</h1>
    <div className="headline headline--right">{ rightHeadline }</div>
  </header>
);

export default Header;
