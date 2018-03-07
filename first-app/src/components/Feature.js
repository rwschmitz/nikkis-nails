import React from 'react';
import Bucket from './Bucket';
import '../css/feature.css';

const Feature = ({bucketName, bucketButtonName}) => (
  <section className="feature__wrapper">
    <Bucket bucketName="Title 1" bucketButtonName="Button 1"/>
    <Bucket bucketName="Title 2" bucketButtonName="Button 2"/>
    <Bucket bucketName="Title 3" bucketButtonName="Button 3"/>
  </section>
);

export default Feature;
