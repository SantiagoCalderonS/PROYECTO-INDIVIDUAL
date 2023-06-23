import { Link } from "react-router-dom";
import style from "./platillo.module.css"

const Platillo = ({recipe})=>{
    //console.log(recipe)
    return(<div className={style.Class}>
         <Link to={`/detalles/${recipe.ID}`} ><img src={recipe.image} alt='' /></Link>
        <h2>{recipe.name}</h2>
        <h3>dietas:</h3>
        <ul>
           {recipe.diets.map((diet) => (<li><p>{diet}</p></li>))}
        </ul>  
        </div>
    )
    }
    
    export default Platillo;