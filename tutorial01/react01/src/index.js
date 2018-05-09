import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

//root id를 가진 문서로 렌더
ReactDOM.render(<App name="mainApp" number="0001">내가 니 자식이다</App>, document.getElementById('root'));

unregister(); //최신버전유지.
