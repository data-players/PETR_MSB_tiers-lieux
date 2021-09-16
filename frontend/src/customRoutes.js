import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default [
  <Route exact path="/" component={HomePage} />,
  <Route exact path="/About" component={AboutPage} />,
];