import React from 'react';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import '../css/bucket.css';

class Bucket extends React.Component {
  render() {
    return (
      <section className="bucket__wrapper">
        <article className="bucket">
          <Title titleName="Cool Title!"/>
          <Input />
          <Button btnContent="Button!"/>
        </article>
      </section>
    );
  }
}

export default Bucket;
