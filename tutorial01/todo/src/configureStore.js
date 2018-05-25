import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
// import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다

// 개발모드에서만 리덕스 개발자도구 적용
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes : ['PENDING','SUCCESS','FAILURE']
});


const configureStore = (initialState) => {
  const store = createStore(rootReducer,composeEnhancers(applyMiddleware(ReduxThunk,customizedPromiseMiddleware)));
  return store;
}
export default configureStore; 

//데이터처리단계인 대기,성공,실패를 커스텀 하기위해 썽크를 사용한다.