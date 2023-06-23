import './App.css';
import {Route, Routes, useNavigate, useLocation} from "react-router-dom"
import { useState, useEffect } from 'react';
import Land from "./Componentes/land/land.jsx"
import MiReceta from "./Componentes/mireceta/mireceta"
import Detalles from "./Componentes/detalles/detalles"
import Home from "./Componentes/home/home.jsx"
import Opciones from './Componentes/navegacion/opciones/opciones';
import axios from 'axios';


function App() {

  const navegar= useNavigate()

  const [permiso, setpermiso]= useState(false);

  //para dar o no acceso a la app/////////////////
function dar_permiso (){
  if (permiso){
    navegar("home")
  }else{
    setpermiso(true)
    navegar("home")
  }
}

useEffect(()=>{
  !permiso && navegar("/")
},[permiso])
////////////////////////////

//para buscar y obtener las dietas existentes al inicio///
const [dietas, setdietas]= useState([])

    async function getDietas(){
      try {
        const {data}= await axios(`http://localhost:3001/diets`)
        setdietas((D)=>[...D,data])
       
    
      } catch (error) {
        window.alert("No se logro obtener las dietas")
      }
    }
    useEffect(()=>{
      !dietas.length && getDietas();
    },[dietas])
//////////////////////////////

let ubicacion= useLocation().pathname


  return (
    <div className="App">
      
      {ubicacion !== "/agregar"&& ubicacion!== "/"?(<div className='Bar'>
        <Opciones dietas={dietas}/> 
       </div>):""}

      <Routes>
        <Route path="/" element={<Land className="Land" prop={dar_permiso}/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detalles/:id" element={<Detalles/>}/>
        <Route path="/agregar" element={<MiReceta/>}/>
      </Routes>
    </div>
  );
}

export default App;
