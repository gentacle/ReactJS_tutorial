import { types } from "./types";

export const actions = {
    setTitleString : title => ({
        type : types.SET_TITLE_STRING,
        payload: title
    }),

    setTitlePost : (title,desc,tag) => (
        {
            type: types.GET_TITLE_POST,
            payload: getTitle(id)
        }
        
    )
}


async function getTitle(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
        const title = res.data.title;
        return {title:res.data.title}
     })
    
}
