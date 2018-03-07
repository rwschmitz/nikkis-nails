import React from 'react';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import '../css/bucket.css';

const Bucket = ({bucketName, bucketButtonName}) => (
  <section className="bucket__wrapper">
    <article className="bucket">
      <Title titleName={bucketName}/>
      <Input />
      <Button btnContent={bucketButtonName}/>
    </article>
  </section>
);

export default Bucket;
