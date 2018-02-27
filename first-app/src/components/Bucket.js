import React from 'react';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import '../css/bucket.css';

class Bucket extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <article className="bucket">
          <Title />
          <Input />
          <Button />
        </article>
      </section>
    );
  }
}

export default Bucket;
