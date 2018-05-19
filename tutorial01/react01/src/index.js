import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { unregister } from './registerServiceWorker';

import { Provider } from "react-redux";
import store from './store';

//root id를 가진 문서로 렌더
//react-redux는 Provider컴포넌트를 사용
//store를 가져와 사용.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

unregister(); //최신버전유지.
// registerServiceWorker();

