import { useDispatch } from "react-redux";
import { filter_diets, filter_origin } from "../../../Redux/actions";
import "./opciones.css"

const Filtro = ({dietas})=>{
    
const dispatch= useDispatch();

function eleccion_dieta(E){
    dispatch(filter_diets(E.target.value))
};

function eleccion_origen(E){
    dispatch(filter_origin(E.target.value))
}

    return(<div className="selectores">
        <h3>DIETA:</h3>
        <select onChange={eleccion_dieta}>
        <option value="gluten free">gluten free</option>
        <option value="dairy free">dairy free</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="vegan">vegan</option>
        <option value="paleolithic">paleolithic</option>
        <option value="primal">primal</option>
        <option value="whole 30">whole 30</option>
        <option value="pescatarian">pescatarian</option>
        <option value="ketogenic">ketogenic</option>
        <option value="fodmap friendly">fodmap friendly</option> 
            {/* por cada tipo de dieta que tenga el valor de lo que renderiza <option value={a}> {a} </option>*/}
        </select>  
        <h3>ORIGEN:</h3> 
        <select onChange={eleccion_origen}>
            <option value="API">api</option>
            <option value="USERS">usuarios</option> {/* ESTABLECER UNA PROPIEDAD EN LAS RECETAS QUE DIGA EL ORIGEN*/}
        </select>     
        </div>
    )
    }
    
    export default Filtro;