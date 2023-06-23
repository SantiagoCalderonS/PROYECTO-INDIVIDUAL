import { useState, useEffect } from "react";
import Ordenar from "./ordenar";
import Filtro from "./filtrar";
/*import style from "./opciones.modules.css"*/
import "./opciones.css"
import { Link } from "react-router-dom";

const Opciones = ({dietas})=>{

    const[filt, setfilt]= useState(false)
    const[ord, setord]= useState(false)

    function filtrando (){
        setfilt(!filt);
    }

    function ordenando(){
        setord(!ord);
    }

    return(
    <div className="containers">
         <Link to="/agregar"><button className="botones">CREAR RECETA</button></Link>
         <br/>
        <button className="botones" onClick={filtrando}>FILTRAR</button>
        {filt? (<Filtro dietas={dietas}/>):""}
        <br/>
        <button className="botones" onClick={ordenando}>ORDENAR</button>  
        {ord? (<Ordenar />):""}
    </div>
    )
    }
    
    export default Opciones;