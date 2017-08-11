import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import ProductInfo from './components/ProductInfo';
import Settings from './components/Settings';
import Help from './components/Help';
import Profile from './components/Profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="profile" component={Profile} />
    <Route path="product-info" component={ProductInfo} />
    <Route path="settings" component={Settings} />
    <Route path="help" component={Help} />
  </Route>
)
