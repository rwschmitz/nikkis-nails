import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from './Button';
import '../css/landing.css';

const Landing = withRouter(({history}) => (
  <div className="landing__wrapper">
    <h1 className="landing__statement">Rudy's Cool App</h1>
    {<Button startApp = {() => history.push('/home/')} btnContent="Start app!"/>}
  </div>)
);

export default Landing;
