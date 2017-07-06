import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './App';
import 'flexboxgrid/css/flexboxgrid.css';
import './index.css';



//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//);


render(
    <Router routes={routes} history={browserHistory} />, document.getElementById('root')
);