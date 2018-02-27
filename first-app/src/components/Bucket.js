import React from 'react';
import Button from './Button';
import Title from './Title';
import '../css/bucket.css';

class Bucket extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <article className="bucket">
          <Title />
          <Button />
        </article>
      </section>
    );
  }
}

export default Bucket;
