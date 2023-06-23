import axios from "axios"

export const getRecipes= (name)=>{
const server= `http://localhost:3001/recipe/name?buscar=${name}`
return async (dispatch) => {
    try {
       const {data}= await axios.get(server)
        return dispatch({
          type: 'GET_RECIPES',
          payload: data,
       });
    } catch (error) {
       window.alert(error.response.data)
    }
 };
}


export const filter_diets= (D)=>{
    return {
        type: "FILTER_DIETS",
        payload: D
    }
}

export const filter_origin= (O)=>{
    return {
        type: "FILTER_ORIGIN",
        payload: O
    }
}

export const order = (R)=>{
    return {
        type:"ORDER",
        payload:R
    }
}

