/** 액션 타입에 따라 리듀서 처리를 위해 리덕스 액션을 사용하여 바인딩 */
import { handleActions } from "redux-actions";
import axios from "axios";
//액션타입 불러오기

export const types = {
  // 비동기 처리시 준비, 성공, 실패 단계로 나누어서 처리
  SET_TITLE_STRING : "EVENT/SET_TITLE_STRING",

  GET_TITIL_POST : "EVENT/GET_TITIL_POST",

  GET_TITIL_POST_PENDING : "EVENT/GET_TITIL_POST_PENDING",
  GET_TITIL_POST_SUCCESS : "EVENT/GET_TITIL_POST_SUCCESS",
  GET_TITIL_POST_FAILURE : "EVENT/GET_TITIL_POST_FAILURE"

};

export const actions = {
    setTitleString : (id=1) =>(
      {
        type: types.GET_TITIL_POST,
        payload : getTitle(id)
      }
  )
};

async function getTitle (id){
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res =>{
      console.log(res);

      const title = res.data.title;

      return {
        title:res.data.title
      }
  })
}

//초기 상태값 설정. 나중에 combineReducers로 묶어서 사용함
const initialState = {
  title:"hello !!",
  pending:false,
  error:false
};

// 액션타입에 따라 데이터 반영
export default handleActions(
  {
    [types.GET_TITIL_POST_PENDING] : (state, actions) =>{
      return{
          ...state,
          pending : true,
          error:false
      };
    },
    [types.GET_TITIL_POST_SUCCESS] : (state, action) => {
      return {
          ...state,
          title:action.payload.title,
          pending : false
      }
    },
    [types.GET_TITIL_POST_FAILURE] : (state, action) =>{
      return {
          ...state,
          pending : false,
          error : true
      }
    }
  },
  initialState
);