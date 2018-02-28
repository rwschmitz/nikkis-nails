import React from 'react';
import '../css/title.css';

class Title extends React.Component {
  render() {
    return (
      <h2 className="title">{this.props.titleName}</h2>
    );
  }
}

export default Title;
