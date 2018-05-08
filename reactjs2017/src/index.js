import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dividend from './Dividend';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Dividend/> , document.getElementById('root'));
registerServiceWorker();
