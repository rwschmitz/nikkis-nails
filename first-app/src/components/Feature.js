import React from 'react';
import Bucket from './Bucket';
import '../css/feature.css';

class Feature extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <Bucket />
        <Bucket />
        <Bucket />
      </section>
    );
  }
}

export default Feature;
