import React from 'react';
import Button from './Button';
import '../css/landing.css';

class Landing extends React.Component {
  startApp = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="landing__wrapper">
        <h1 className="landing__statement">Rudy's Cool App</h1>
        <Button btnContent="Start app!" startApp={this.startApp} />
      </div>
    );
  }
}

export default Landing;
