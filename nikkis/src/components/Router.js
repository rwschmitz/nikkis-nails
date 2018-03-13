import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import App from '../App.js';
import About from './About.js';
import Products from './Products.js';
import Contact from './Contact.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
