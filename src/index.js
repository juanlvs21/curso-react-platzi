import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Import createStore y applyMiddleware Redux
import { createStore, applyMiddleware } from 'redux';
// Import Provider React-Redux
import { Provider } from 'react-redux';
// Import Map Immutable
import { Map as map } from 'immutable';
// Import components
import Home from './pages/containers/Home';
// Import Reducer
import reducer from './reducer/index';
// Import Middleware Logger
import logger from 'redux-logger'
// Impport Middleware redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';
// Impport Middleware thunk
import thunk from 'redux-thunk'; // Thunk es usado para funciones asincronas (Api)

// Import Data Normalizr
// import Data from './schemas/index';

// const initialState = {
//     data: {
//         entities: Data.entities,
//         categories: Data.result.categories,
//         search: []
//     },
//     modal: {
//         visibility: false,
//         mediaId: null
//     }
// };

// Middlewares
// function logger({ getState, dispatch }) {
//     return (next) => {
//         return (action) => {
//             console.log('Vamos a enviar esta accion', action);
//             const value = next(action);
//             console.log('Este es mi nuevo estado', getState().toJS());
//             return value;
//         }
//     }
// }

// const logger = ({ getState, dispatch }) => next => action => {
//     console.log('Vamos a enviar esta accion', action);
//     const value = next(action);
//     console.log('Este es mi nuevo estado', getState().toJS());
//     return value;
// }

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk // Se pueden colocar mas middlewares separados por comas
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    , document.getElementById('home-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
