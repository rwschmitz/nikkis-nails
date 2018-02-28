import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import App from '../App.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Landing }></Route>
      <Route exact path="/home" component={ App }></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
