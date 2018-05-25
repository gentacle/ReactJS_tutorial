import { handleActions } from "redux-actions";
import { types } from "./types";
import { actions } from "./actions";

const initialState = {
    title:"Base title :D",
    pending:false,
    error:false,
}

export default handleActions(
    {
        [types.GET_TITLE_POST_PENDING] : (state, actions) =>{
            return{
                ...state,
                pending: true,
                error: false
            }
        },
        [types.GET_TITLE_POST_SUCCESS] : (state, action) =>{
            return{
                ...state,
                title:action.payload.title,
                pending: false
            }
        },
        [types.GET_TITLE_POST_FAILURE] : (state, action) =>{
            return{
                ...state,
                pending: false,
                error: true
            }
        }
    },
    initialState
)