import React from 'react';
import PrimaryImage from './PrimaryImage';
import SecondaryImage from './SecondaryImage';
import '../css/feature.css';

class Feature extends React.Component {
  render() {
    const {
      primaryImage,
      secondaryImage1,
      secondaryImage2,
      secondaryImage3
    } = this.props;
    return (
      <section className="feature__wrapper">

        <article className="feature__primary-container">
            <PrimaryImage primaryImage={ primaryImage } />
          </article>

          <article className="feature__secondary-container">
            <SecondaryImage secondaryImage={ secondaryImage1 } />
            <SecondaryImage secondaryImage={ secondaryImage2 } />
            <SecondaryImage secondaryImage={ secondaryImage3 } />
          </article>

      </section>

    );
  }
}

export default Feature;