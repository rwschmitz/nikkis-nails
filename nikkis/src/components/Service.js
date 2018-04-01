import React from 'react';
import Bucket from './Bucket';
import '../css/service.css';

class Service extends React.Component {
  render() {
    return (
      <section className="service__wrapper">
        <article className="service__container">
          <Bucket
          servicesHeadline="Service 1"
          servicesCopy="We offer a service that will provide you the best solution while maintaining an affordable cost with high quality results."
          />
        <Bucket
          servicesHeadline="Service 2"
          servicesCopy="We offer a service that will provide you the best solution while maintaining an affordable cost with high quality results."
        />
        <Bucket
          servicesHeadline="Service 3"
          servicesCopy="We offer a service that will provide you the best solution while maintaining an affordable cost with high quality results."
        />
        </article>
    </section>
    );
  }
}

export default Service;
