import React from 'react';
import Bucket from './Bucket';
import '../css/feature.css';

class Feature extends React.Component {

  goToAbout = () => {
    this.props.history.push('/about/');
  }

  goToProducts = () => {
    this.props.history.push('/products/');
  }

  goToContact = () => {
    this.props.history.push('/contact/');
  }

  render() {
    return (
      <section className="feature__wrapper">
        <Bucket bucketName="About Us" bucketButtonName="About" bucketButtonPurpose={this.goToAbout}/>
        <Bucket bucketName="Cool Products" bucketButtonName="Products" bucketButtonPurpose={this.goToProducts}/>
        <Bucket bucketName="Contact Us" bucketButtonName="Contact" bucketButtonPurpose={this.goToContact}/>
      </section>
    );
  }
}

export default Feature;
