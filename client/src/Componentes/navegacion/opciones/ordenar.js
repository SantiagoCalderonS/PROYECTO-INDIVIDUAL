import { order } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

const Ordenar = ()=>{

    const dispatch= useDispatch()

    function ordenar (E){
        dispatch(order(E.target.value))
    };
    
    return(<div>
        <select onChange={ordenar}>
            <option value="ABC">INICIAL</option> {/* por cada tipo de dieta que tenga el valor de lo que renderiza <option value={a}> {a} </option>*/}
            <option value="healthScore">VALOR NUTRICIONAL</option>
        </select>     
        </div>
    )
    }
    
    export default Ordenar;