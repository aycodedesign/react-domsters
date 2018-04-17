import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
//since 'App' is called in router, I changed 'App' here to 'Router'
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
