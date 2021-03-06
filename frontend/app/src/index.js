import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-typeahead/css/Typeahead.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
