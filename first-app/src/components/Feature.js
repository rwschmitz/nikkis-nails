import React from 'react';
import Bucket from './Bucket';
import '../css/feature.css';

class Feature extends React.Component {

  goToAbout = () => {
    console.log(this.props);
  }

  goToProducts = () => (
    alert('this is button 2')
  );

  goToContact = () => (
    alert('this is button 3')
  );

  render() {
    return (
      <section className="feature__wrapper">
        <Bucket bucketName="Title 1" bucketButtonName="Button 1" bucketButtonPurpose={this.goToAbout}/>
        <Bucket bucketName="Title 2" bucketButtonName="Button 2" bucketButtonPurpose={this.goToProducts}/>
        <Bucket bucketName="Title 3" bucketButtonName="Button 3" bucketButtonPurpose={this.goToContact}/>
      </section>
    );
  }
}

export default Feature;
