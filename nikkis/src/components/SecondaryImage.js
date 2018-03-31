import React from 'react';
import '../css/secondary-image.css';

class SecondaryImage extends React.Component {
  render() {
    const {
        secondaryImage
     } = this.props;
    return (
      <article className="secondary__wrapper">
        <img className="secondary__image" src={ secondaryImage } alt="Nikki's Nails Finished Product!" />
      </article>
    );
  }
}

export default SecondaryImage;
