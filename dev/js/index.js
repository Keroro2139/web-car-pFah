import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import 'antd/dist/antd.min.css';
import App from './components/App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise)
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' component={App}></Route>
                {/* <Route path='/' */}
            </Switch>
        </HashRouter>
    </Provider>,
    document.querySelector('#container')
);
