import React from 'react';
import Service from './Service';
import Feature from './Feature';
import Footer from './Footer';
import Header from './Header';
import '../css/landing.css';
import shop from '../img/shop001.jpg';
import hand001 from '../img/hand001-square.jpg';
import hand002 from '../img/hand002-square.jpg';
import hand003 from '../img/hand003-square.jpg';

class Landing extends React.Component {
  startApp = ( ) => {
    this.props.history.push('/home');
  }

  render( ) {
    return (
      <main className="landing__wrapper">

        <section className="landing__header">
          <Header
            leftHeadline="Nikki's Nail Salon"
            rightHeadline="&#9776;"
          />
        </section>

          <Feature
            primaryImage={ shop }
            secondaryImage1={ hand001 }
            secondaryImage2={ hand002 }
            secondaryImage3={ hand003 }
          />

        <Service />

        <section className="landing__footer">
          <Footer
              hoursMin="Sun: 11a &ndash; 6p"
              hoursMaj="Mon &ndash; Sat: 9a &ndash; 8p"
              locationStreet="208 N Hwy 67"
              locationCityStateZip="Florissant, MO 63031"
              contact="314.838.2823"
            />
          </section>
      </main>
    );
  }
}

export default Landing;
