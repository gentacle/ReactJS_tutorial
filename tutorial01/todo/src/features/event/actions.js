import { types } from "./types";

export const actions = {
    anyFn : (title) => (
        {
        type : types.SET_TITLE_STRING,
        payload: title
        }
    )
}


// async function getTitle(id) {
//     return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res =>{
//         const title = res.data.title;
//         return {title:res.data.title}
//      })
    
// }
