import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import store from './store';
import App from './App';
import { unregister } from './registerServiceWorker';

//root id를 가진 문서로 렌더
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

unregister(); //최신버전유지.
