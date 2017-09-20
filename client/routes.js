import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import ProductInfo from './components/ProductInfo';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="product-info" component={ProductInfo} />
  </Route>
)
