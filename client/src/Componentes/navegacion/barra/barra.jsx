import style from "./barra.module.css"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getRecipes} from "../../../Redux/actions.jsx"

const Barra = ()=>{
    const [buscado, setbuscado]= useState({
        info:"",
        boton:false
    });
    //valor de la busqueda "name"

    const dispatch= useDispatch()

    function busqueda(E){
        setbuscado({...buscado, info: E.target.value})
    }

    function buscar() {
        dispatch(getRecipes(buscado.info))
        setbuscado({...buscado, boton:!buscado.boton})
    }
    

    useEffect(()=>{
        setbuscado({...buscado, info:""})
    },[buscado.boton])


    return(<div className={style.Class}>
        <input type='search'  onChange={busqueda} value={buscado.info} /> <button onClick={buscar}>buscar</button>    
        </div>
    )
    }
    
    export default Barra;

    //todos los botones deberian tener un "event.prevent.default()"