import React from 'react';
import '../css/header.css';

class Greeting extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="headline">"This is a pretty basic app." -Rudy</div>
        <div className="subheadline">-Michael Scott</div>
      </header>
    );
  }
}

export default Greeting;
