import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import Consumer from './Context';

ReactDOM.render( 
<Consumer>
  <App />
</Consumer>,
  document.getElementById('root')
);

