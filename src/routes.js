import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import Dashboard from './containers/DashboardPage';
import PropertyPage from './containers/PropertyPage';

export default (
  <Route>
    <Route path="/" component={App}>
          <IndexRoute component={Dashboard}/>
          <Route path="dashboard" component={Dashboard}/>
          <Route path="Property/:mlsnumber" component={PropertyPage}/>
          <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
