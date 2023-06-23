//MIS RECETAS
const initialState= {
    allRecipes:[],
    recipes:[]
    }

export default function reducer ( state = initialState, actions) {
    switch(actions.type){
        case 'GET_RECIPES':
            return { ...state, allRecipes: actions.payload, recipes: actions.payload };
      
        case 'FILTER_DIETS':
            return { ...state, recipes:state.allRecipes.filter(rec=> rec.diets.includes(actions.payload)  )};
            
        case 'FILTER_ORIGIN':
            if(actions.payload === "API"){
                return { ...state, recipes:state.allRecipes.filter(rec=> rec.ID< 2000000 )};
            }else if(actions.payload === "USERS"){
                return { ...state, recipes:state.allRecipes.filter(rec=> rec.ID> 2000000 )};
            }
            

        case 'ORDER':
            const todos_platillosOrdenados= [...state.allRecipes];
            const platillosOrdenados= [...state.recipes]
            if(actions.payload === "healthScore"){
                platillosOrdenados.sort((a, b) => a.healthScore - b.healthScore);
                todos_platillosOrdenados.sort((a, b) => a.healthScore - b.healthScore);
            }else if(actions.payload === "ABC"){
                todos_platillosOrdenados.sort((a, b) =>  a.name.toLowerCase().charCodeAt(0)- b.name.toLowerCase().charCodeAt(0));
                platillosOrdenados.sort((a, b) =>  a.name.toLowerCase().charCodeAt(0)- b.name.toLowerCase().charCodeAt(0));
            }
            return { ...state, allRecipes: todos_platillosOrdenados, recipes: platillosOrdenados}


            //repasar funcion del default
            default: return {...state};
    }



}


