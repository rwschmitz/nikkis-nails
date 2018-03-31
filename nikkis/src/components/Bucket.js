import React from 'react';
import Button from './Button';
import '../css/bucket.css';

class Bucket extends React.Component {
  render() {
    const {
      servicesHeadline,
      servicesCopy
    } = this.props;
    return (
      <section className="bucket__wrapper">
      <article className="bucket">
        <h2 className="bucket__headline">
          { servicesHeadline }
        </h2>
        <p className="bucket__copy">
          { servicesCopy }
        </p>
        <Button btnContent="Learn more!"/>
      </article>
    </section>
    )
  }
}

export default Bucket;
