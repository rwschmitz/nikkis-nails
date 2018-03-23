import React from 'react';
import Header from './Header';
import '../css/contact.css';

class Contact extends React.Component {

  render( ) {
    return (
      <div>
        <Header headline="'Cool Contact Page'" subheadline="-Michael Scott" />
        <h1 className="contact-headline">This is the contact page!</h1>
      </div>
    );
  }
}

export default Contact;
