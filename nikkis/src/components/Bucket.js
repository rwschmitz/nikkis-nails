import React from 'react';
import '../css/bucket.css';

const Bucket = ( { servicesHeadline, servicesCopy } ) => (
  <section className="bucket__wrapper">
    <article className="bucket">
      <h2 className="bucket__headline">
        { servicesHeadline }
      </h2>
      <p className="bucket__copy">
        { servicesCopy }
      </p>
    </article>
  </section>
);

export default Bucket;
