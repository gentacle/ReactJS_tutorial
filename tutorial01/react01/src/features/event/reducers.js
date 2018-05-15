/** 액션 타입에 따라 리듀서 처리를 위해 리덕스 액션을 사용하여 바인딩 */
import { handleActions } from "redux-actions";
import axios from "axios";
//액션타입 불러오기


//1.타입생성단
export const types = {
  // 비동기 처리시 준비, 성공, 실패 단계로 나누어서 처리
  //기본 초기화구문
  SET_TITLE_STRING : "EVENT/SET_TITLE_STRING",

  GET_TITIL_POST : "EVENT/GET_TITIL_POST",

  //비동기처리문
  GET_TITIL_POST_PENDING : "EVENT/GET_TITIL_POST_PENDING",
  GET_TITIL_POST_SUCCESS : "EVENT/GET_TITIL_POST_SUCCESS",
  GET_TITIL_POST_FAILURE : "EVENT/GET_TITIL_POST_FAILURE"

};

//2.액션생성단
export const actions = {
    setTitleString : (id=1) =>(
      {
        type: types.GET_TITIL_POST,
        payload : getTitle(id)
      }
  )
};


//초기 상태값 설정. 나중에 combineReducers로 묶어서 사용함
//말그대로 이니셜상태를 정의하는구문.
const initialState = {
  title:"hello !!",
  pending:false,
  error:false
};


/* <Anthor FnList>-------------------------------------------------- */

//(비동기)getTitle함수정의. 인자로 id를 받음.
//axios라이브러리를 이용, 특정위치의 json형식의 파일을 읽어옴.
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


/* <Reducer FnList>------------------------------------------------ */

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