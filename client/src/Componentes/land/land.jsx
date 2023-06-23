import style from "./land.module.css"

const Land = ({prop})=>{
return(<div className={style.Class}>
    <button onClick={prop}>BIENVENIDO</button>    
    </div>
)
}

export default Land;

