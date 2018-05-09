import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

//root id를 가진 문서로 렌더
ReactDOM.render(<App />, document.getElementById('root'));

unregister(); //최신버전유지.
