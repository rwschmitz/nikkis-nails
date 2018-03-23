import React from 'react';
import '../css/footer.css';

const Footer = ( { hours, location, contact } ) => (
  <footer className="footer">
    <img className="footer-image" src={ require( '../img/clock.svg' ) } alt="Hours"/>
    <img className="footer-image" src={ require( '../img/marker.svg' ) } alt="Location"/>
    <img className="footer-image" src={ require( '../img/phone.svg' ) } alt="Contact Us"/>
  </footer>
);

export default Footer;
