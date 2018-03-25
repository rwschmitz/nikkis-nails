import React from 'react';
import '../css/footer.css';

const Footer = ( { hoursMin, hoursMaj, locationStreet, locationCityStateZip, contact } ) => (
  <footer className="footer">

    <section className="footer__container">
      <img className="footer__image" src={ require( '../img/clock.svg' ) } alt="Hours"/>
      <time className="footer__information">{hoursMin}</time>
      <time className="footer__information">{hoursMaj}</time>
    </section>

    <section className="footer__container">
      <img className="footer__image" src={ require( '../img/marker.svg' ) } alt="Location"/>
      <p className="footer__information">{locationStreet}</p>
      <p className="footer__information">{locationCityStateZip}</p>
    </section>

    <section className="footer__container">
      <img className="footer__image" src={ require( '../img/phone.svg' ) } alt="Contact us"/>
      <p className="footer__information">{contact}</p>
    </section>

  </footer>
);

export default Footer;
