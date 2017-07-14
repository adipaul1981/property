import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import App from './App';
import './index.css';
import 'flexboxgrid/css/flexboxgrid.css';




render(
    <Router routes={routes} history={browserHistory} />, document.getElementById('root')
);