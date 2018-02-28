import React from 'react';
import Feature from './components/Feature';
import Header from './components/Header';
import './style.css';
import './css/fonts.css';

class App extends React.Component {
  render() {
    return (
      <div className="this-is-the-apps-name">
        <Header headline="'This is a pretty basic app.' -Rudy" subheadline="-Michael Scott" />
        <Feature />
      </div>
    );
  }
}

export default App;
