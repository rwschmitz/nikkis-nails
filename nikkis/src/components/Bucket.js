import React from 'react';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import '../css/bucket.css';

const Bucket = ({bucketName, bucketButtonName, bucketButtonPurpose}) => (
  <section className="bucket__wrapper">
    <article className="bucket">
      <Title titleName={bucketName}/>
      <Input />
      <Button btnContent={bucketButtonName} navigateApp={bucketButtonPurpose}/>
    </article>
  </section>
);

export default Bucket;
