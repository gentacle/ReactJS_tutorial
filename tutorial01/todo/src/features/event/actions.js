import { types } from "./types";

export const actions = {
    setVisibilityFilter : (filter) => (
        {
        type : types.SET_VISIBILITY_FILTER,
        payload: filter
        }
    ),

    toggleTodo : (id) => (
        {
        type : types.TOGGLE_TODO,
        payload : id
        }
    )
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// async function getTitle(id) {
//     return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res =>{
//         const title = res.data.title;
//         return {title:res.data.title}
//      })
    
// }
