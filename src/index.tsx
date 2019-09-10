import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/index.css';
import './style/css/products.css';
import './style/css/contact.css';
import './style/css/carousel.css';
import './style/css/footer.css';
import MainTemplate from './MainTemplate';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainTemplate />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
