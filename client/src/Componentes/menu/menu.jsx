import Platillo from "../platillo/platillo";
import style from "./menu.module.css"

const Menu = ({myRecipes})=>{
    
    return(<div className={style.Class}>
            {myRecipes.length !== 0? myRecipes.map( (recipe, index) => {
                return(
                    <div>
                        <Platillo key={index+1} recipe={recipe}/>
                    </div>
                )
            }):(
                <h1>Busque su proximo buffet</h1>
            )
            }
        </div>
    )
    }
    
    export default Menu;