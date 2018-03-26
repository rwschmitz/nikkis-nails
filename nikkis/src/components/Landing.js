import React from 'react';
import Bucket from './Bucket';
import Footer from './Footer';
import Header from './Header';

import '../css/landing.css';

class Landing extends React.Component {
  startApp = ( ) => {
    this.props.history.push('/home');
  }

  render( ) {
    return (
      <main className="landing__wrapper">

        <Header
            leftHeadline="Nikki's Nail Salon"
            rightHeadline="&#9776;"
          />

        <section className="landing__container">
          <Bucket
            servicesHeadline="Service 1"
            servicesCopy="We offer a service that will provide you the best solution while maintaining an affordable cost with high quality results."
            />
          <Bucket
            servicesHeadline="Service 2"
            servicesCopy="We offer a service that will provide you the best solution while maintaining an affordable cost with high quality results."
          />
          <Bucket
            servicesHeadline="Service 3"
            servicesCopy="We offer a service that will provide you the best solution while maintaining an affordable cost with high quality results."
          />
        </section>

        <Footer
          hoursMin="Sun: 11a &ndash; 6p"
          hoursMaj="Mon &ndash; Sat: 9a &ndash; 8p"
          locationStreet="208 N Hwy 67"
          locationCityStateZip="Florissant, MO 63031"
          contact="314.838.2823"
        />
      </main>
    );
  }
}

export default Landing;
