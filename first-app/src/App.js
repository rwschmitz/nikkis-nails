import React from 'react';
import Feature from './components/Feature';
import Greeting from './components/Greeting';
import './style.css';
import './css/fonts.css';

class App extends React.Component {
  render() {
    return (
      <div className="this-is-the-apps-name">
        <Greeting />
        <Feature />
      </div>
    );
  }
}

export default App;
