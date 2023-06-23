import { useState, useEffect } from "react"
import Menu from "../menu/menu"
import { useDispatch , useSelector } from "react-redux";
import style from "./home.module.css"
import Barra from "../navegacion/barra/barra";
import { getRecipes } from "../../Redux/actions";

function Home(){

//aqui estara el store de recetas del segundo objeto el que recibe las alteraciones
const myRecipes= useSelector((state)=> state.recipes)
const dispatch= useDispatch()


const [rec_pag, setRecet]= useState([])
const [actualPag, setActual]= useState({})

let numPaginas=Math.ceil(myRecipes.length/9);
let paginas=[]
for (let i = 1; i < numPaginas+1; i++) {
    paginas.push(i);
}


function paginado(E){
    let pag;
    if(E === 0){
        pag = 1
    }else{
        pag = E.target.value
    }
    const inicio= (pag * 9)-9
    const fin= (pag*9)-1
    

    const vista= myRecipes.slice(inicio,fin)
    setActual({...E})
    setRecet([...vista])
}

useEffect(()=>{
   !actualPag.target && paginado(0);
   actualPag.target && paginado(actualPag)
},[myRecipes])

useEffect(()=>{
    dispatch(getRecipes(""))
},[])

    return(<div>
        <div className={style.Class1}>
        <Barra/>
        <br/>
       {paginas.length !== 0? (
            paginas.map((pag)=>
            (<button onClick={paginado} value={pag}>{pag}</button>)
            )
        ): ""}
        </div>

        <div className={style.Class2} >
        <Menu myRecipes={rec_pag}/>
        </div>
        
    </div>
    )
    }
    
    export default Home;