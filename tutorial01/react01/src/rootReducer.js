import { combineReducers } from 'redux';
import event from './features/event/reducers';

export default combineReducers(
    {
      // 리듀서 넣기
      event
    }
  );