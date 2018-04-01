import React from 'react';
import '../css/secondary-image.css';

class SecondaryImage extends React.Component {
  render() {
    const {
        secondaryImage
     } = this.props;
    return (
      <section className="secondary__wrapper">
        <article className="secondary__container">
          <img className="secondary__image" src={ secondaryImage } alt="Nikki's Nails Finished Product!" />
        </article>
      </section>
    );
  }
}

export default SecondaryImage;
