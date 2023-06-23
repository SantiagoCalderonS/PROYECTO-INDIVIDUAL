import axios from "axios"

import { useEffect, useState } from "react";
import Validador from "./validaciones";
import { Link } from "react-router-dom";
import style from "./mireceta.module.css";
import { useNavigate } from "react-router-dom";


const MiReceta = ()=>{
    const navigate = useNavigate();

    const [receta, setReceta]= useState({
        name: "",
        image: "",
        summary:"",
        instructions:"",
        healthScore: "",
        diets:[]})
    
    const [err, setErr]= useState({
        error:"",
        input_validado: ""
    })

    const [completado, setComp]= useState(false)

    function handleChange(E){
        let info= E.target.value;
        const input= E.target.name;

        setErr({...err,
        error: Validador(info, input),
        input_validado: input
        })

        
        if(input === "healthScore" && !isNaN(info)){
            info= Number(info)
            setReceta({...receta,
                [input]: info
            })
        }else if (input=== "name" ||input=== "summary" ||input=== "instructions" ||input=== "image"){
            setReceta({...receta,
            [input]: info
        })
    }

    }

    function dietas_buttons(E){
        if(E.target.value==="Borrar dietas"){
            setReceta({...receta, 
                diets:[]})
        }else if(!receta.diets.includes()){
            setReceta({...receta, 
        diets:[...receta.diets, E.target.value]})
        }
    }

    async function Subir(E){
        E.preventDefault(); 
        
        receta.instructions=receta.instructions.split("/")

        
        try {
            const {data}= await axios.post(`http://localhost:3001/recipes`,receta)
            window.alert(`La receta "${data.name}" a sido creada`)
        } catch (error) {
            window.alert(error.data)
        }
        navigate("/home");
    }

    useEffect(()=>{
        if( err.error === "" && receta.name && receta.diets.length && receta.healthScore && receta.summary !== "" &&  receta.image && receta.instructions.length && (receta.healthScore<=100 && receta.healthScore>0)){
            setComp(true)
        }else{
            setComp(false)
        }

    },[err,receta.diets.length, receta.healthScore, receta.image, receta.instructions.length, receta.name, receta.summary])

    return(<div className={style.Class}>
        <Link to="/home"><button>VER RECETAS</button></Link>
        <form>
            <label>NOMBRE: </label>
            <input name="name" onChange={handleChange} value={receta.name}/>
            {err.error !== "" && err.input_validado=== "name"? (<p>{err.error}</p>):""}
            <br/>

            <label>RESUMEN: </label>
            <input name="summary" onChange={handleChange} value={receta.summary}/>
            {err.error !== "" && err.input_validado=== "summary"? (<p>{err.error}</p>):""}
            <br/>

            <label>INSTRUCCIONES-agregue "/" para separarlos: </label>
            <input name="instructions" onChange={handleChange} value={receta.instructions}/>
            {err.error !== "" && err.input_validado=== "instructions"? (<p>{err.error}</p>):""}
            <br/>

            <label>VALOR NUTRICIONAL /de 0 a 100/: </label>
            <input name="healthScore" onChange={handleChange} value={receta.healthScore}/>
            {err.error !== "" && err.input_validado=== "healthScore"? (<p>{err.error}</p>):""}
            <br/>

            <label>DIETAS: {receta.diets}</label>
            <br/>
            <select onChange={dietas_buttons}>
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
        {receta.diets.length && (<option value="Borrar dietas">Borrar</option>)}
        </select>
            <br/>

            <label>URL DE LA FOTO: </label>
            <input name="image" onChange={handleChange} value={receta.image}/>
            {err.error !== "" && err.input_validado=== "image"? (<p>{err.error}</p>):""}
            <br/>

            {completado === true?(<button type="submit" onClick={Subir}>CREAR</button>):""}
        </form>
            
        </div>
    )
    }
    
    export default MiReceta;
    /*<select onClick={valor}>
                <option value="vegan">vegan</option>
                </select> */