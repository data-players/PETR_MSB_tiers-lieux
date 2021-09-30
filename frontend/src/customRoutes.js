import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';

export default [
  <Route exact path="/" component={HomePage} />,
  <Route exact path="/About" component={AboutPage} />,
  <Route exact path="/Map" component={MapPage} />,
  <Route exact path="/Search" component={SearchPage} />,
];