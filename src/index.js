import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/alertifyjs/build/css/alertify.min.css';
import {BrowserRouter} from 'react-router-dom';






ReactDOM.render(  
    <BrowserRouter><App /></BrowserRouter>,document.getElementById('root')
);



