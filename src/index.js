import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; // 中间件处理异步
// import logger from 'redux-logger'; // 开发环境使用，追踪日志
import reducer from './store'; // 所有数据
// import { alertOperateFn } from './store/action'; // action

// 创建全局store
// let middleware = applyMiddleware(thunk,logger);
let middleware = applyMiddleware(thunk);
// let middleware = process.env.NODE_ENV==='development'?applyMiddleware(thunk,logger):applyMiddleware(thunk);
const store = createStore(reducer,middleware);
// store.dispatch(alertOperateFn('测试'));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
