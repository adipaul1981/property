import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import NotFoundPage from './NotFoundPage.js';
import Dashboard from './DashboardPage';
import PropertyPage from './PropertyPage';

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
