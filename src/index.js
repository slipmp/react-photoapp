import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhotoApp from './PhotoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhotoApp />, document.getElementById('root'));
registerServiceWorker();
