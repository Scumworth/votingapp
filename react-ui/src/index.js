import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
    <App 
    url='https://powerful-stream-48801.herokuapp.com/api/pollitems'
    pollInterval = {2000} />
    </BrowserRouter>), 
    document.getElementById('root')
    );

//registerServiceWorker();


//url must be changed
