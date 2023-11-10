import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

//rendering app; react looks at div id root
ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
    document.getElementById('root')
);