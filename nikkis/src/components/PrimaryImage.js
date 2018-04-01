import React from 'react';
import '../css/primary-image.css';

class PrimaryImage extends React.Component {
  render() {
    const { primaryImage } = this.props;
    return (
      <section className="primary__wrapper">
        <article className="primary__container">
          <img className="primary__image" src={ primaryImage } alt="Nikki's Nails Finished Product!" />
        </article>
      </section>
    );
  }
}

export default PrimaryImage;
