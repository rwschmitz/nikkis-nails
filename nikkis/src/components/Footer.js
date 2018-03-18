import React from 'react';
import '../css/footer.css';

const Footer = ({hours, location, contact} ) => (
  <footer className="footer">
    <img className="footer-image" src={require('../img/clock.svg')} />
    <img className="footer-image" src={require('../img/marker.svg')} />
    <img className="footer-image" src={require('../img/phone.svg')} />
  </footer>
);

export default Footer;
