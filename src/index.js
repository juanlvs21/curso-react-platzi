import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Import components
import Home from './pages/containers/Home';

// Import data
import Data from './data.json';

ReactDOM.render(<Home data={Data} />, document.getElementById('home-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
