import React from 'react';
import '../css/primary-image.css';

class PrimaryImage extends React.Component {
  render() {
    const { primaryImage } = this.props;
    return (
      <article className="primary__wrapper">
        <img className="primary__image" src={ primaryImage } alt="Nikki's Nails" />
      </article>
    );
  }
}

export default PrimaryImage;
