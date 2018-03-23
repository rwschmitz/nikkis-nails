import React from 'react';
import Header from './Header';
import '../css/about.css';

class About extends React.Component {

  render( ) {
    return (
      <div>
        <Header headline="'Cool About Page'" subheadline="-Michael Scott" />
        <h1 className="about-headline">This is the about page!</h1>
      </div>
    );
  }
}

export default About;
