
export default function Validador (info, input_validado){

    if (input_validado === "name"){
        if(info.length === 0){return "Escriba el nombre del platillo"};
        if(info.length > 100){return "El nombre es muy largo"};
        return ""
    }
    if (input_validado === "summary"){
        if(info.length === 0){return "Describa el platillo"};
        if(info.length > 1000){return "Su descripcion es muy larga"};
       
        return ""
    }
    if(input_validado=== "instructions"){
        if(info.length === 0){return "Escriba su receta"};

        return ""
    }
    if(input_validado=== "healthScore" || input_validado === "price"){
        if(isNaN(info)){ return "No es un numero"}
        if(Number(info) <=0 ){return "Ponga un valor adecuado"};
        if(Number(info) > 100 ){return "El debe ser entre 0 a 100"};

        return ""
    }
    if(input_validado=== "image"){
        if(!info.length){
            return "Escriba el link de la imagen"
        };

        return ""
    }

}  