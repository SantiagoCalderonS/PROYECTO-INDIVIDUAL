import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Style from "./detalles.module.css"

const Detalles = ()=>{

    const [receta, setReceta]= useState({})
    let {id} = useParams();
    
  
   
    
    useEffect(()=>{ 
         async function laReceta(){
        try {
            const {data}= await axios(`http://localhost:3001/recipes/${id}`)
            
            setReceta({...data, summary:data.summary.replace(/<[^>]+>/g,"") })
        } catch (error) {
           window.alert("no se pudo conseguir su receta")
        }}
        laReceta();
         return setReceta({})
    },[id])
    
   
    return(<div className={Style.Class}>
        { receta.name?(<>
        <h4>#{receta.ID}</h4>
        <h1>{receta.name}</h1>
        <img src={receta.image} alt='' />
        <p>{receta.summary}</p>
        <h3>Valor nutricional: </h3><p>{receta.healthScore}</p>
        <h3>Dietas:</h3>
        <ul>
           {receta.diets?.map((D) => (<li><p>{D}</p></li>))}
        </ul>
        <h3>Preparacion:</h3>
        <ul>
           {receta.instructions.map((step) => (<li><p>{step}</p></li>))}
        </ul></>):(<></>)}



    </div>
    )
    }
    
    export default Detalles;