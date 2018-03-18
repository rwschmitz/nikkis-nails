import React from 'react';
import Button from './Button';
import Footer from './Footer';
import Header from './Header';
import '../css/landing.css';

class Landing extends React.Component {
  startApp = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="landing__wrapper">
        <Header leftHeadline="Nikki's Nail Salon" rightHeadline="&#9776;" />
        <Footer />
      </div>
    );
  }
}

export default Landing;
