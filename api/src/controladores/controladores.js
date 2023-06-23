const {Op} = require("sequelize")
const {Recipe, Diets}= require("../db")
const axios= require("axios");
require('dotenv').config();
const { APY_KEY } = process.env;
  

const getRecipe= async (req, res)=>{
    let {id}= req.params
    id=Number(id)
    
   
if(id<=2000000){
     try {
        const {data}= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APY_KEY}`)
        
        let instruct= [];

        if(data.analyzedInstructions.length>0){
            const pasos= data.analyzedInstructions[0].steps
        for(let i=0; i < pasos.length; i++){
            instruct.push(pasos[i].step);
        }
    }
        /*const pasos= data.analyzedInstructions[0].steps
            for(let i=0; i < pasos.length; i++){
                instruct.push(pasos[i].step);
            }*/

            const platillo={
                ID: data.id,
                name: data.title,
                image: data.image,
                summary: data.summary,
                instructions: instruct,
                healthScore: data.healthScore,
                diets: data.diets}

        res.json(platillo)
    
    } catch (error) {
        res.status(500).send("En estos momentos no podemos resolver su consulta")
    }
}else{
    try {
       let receta= await Recipe.findOne({where:{ID:(id - 2000000) }, include:Diets})
       
       const dietsName= receta.dataValues.diets.map((D)=>{
        return D.name
    })

       
       const newReceta= {...receta.dataValues, ID:id, diets:dietsName};
       
       res.json(newReceta)

    } catch (error) {
        res.status(500).send("En estos momentos no podemos resolver su consulta")
    }
}
}

const getDiets= async (req,res)=> {
   let dietas=[]
    try {
        const {data}= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APY_KEY}&number=100&addRecipeInformation=true`)
        const {results}= data;
        results.forEach(recet => {
            recet.diets.forEach((diet)=>{Diets.findOrCreate({where:{name: diet}}).then().catch(()=>{})});
            });
                    
        Diets.findAll().then((resp)=>{
           resp.forEach((r)=>{dietas.push(r.name)});
            res.json(dietas)
        }).catch(()=>{res.status(500).send("No se pudieron obtener los tipos de dietas")})
    } catch (error) {
        res.status(500).send("No se pudieron obtener los tipos de dietas")
    }

}

const postRecipe= async (req, res)=>{
    const {name, image, instructions,healthScore,summary, diets} =req.body

    try {
        const dietasdereceta=  await Diets.findAll({
            where:{
                name:{
                    [Op.or]: [...diets]
                }
            }
        })

        const newRec= await Recipe.create({
            name: name, image: image, instructions:instructions,healthScore:healthScore, summary:summary 
        })
        await newRec.setDiets(dietasdereceta)
        
        const receta= await Recipe.findOne({where:{name:name}, include:Diets})

        res.json(receta)
    } catch (error) {
        res.status(500).send("No se pudo crear su receta")
    }

}


const recipeName= async (req,res)=>{
    const {buscar}= req.query
    const buscados= []
    try {
        const {data}= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APY_KEY}&query=${buscar}&number=100&addRecipeInformation=true`)


        const recetas_cortadas= data.results.map((r)=>{
            let instruct= [];
            
            if(r.analyzedInstructions.length>0){
                const pasos= r.analyzedInstructions[0].steps
            for(let i=0; i < pasos.length; i++){
                instruct.push(pasos[i].step);
            }
        }
            
            return {
                ID: r.id,
                name: r.title,
                image: r.image,
                summary: r.summary,
                instructions: instruct,
                healthScore: r.healthScore,
                diets: r.diets

            }
        })
        

        const bd_encontrados= await Recipe.findAll({
            where: {
                name: {
                  [Op.like]: `%${buscar.toLowerCase()}%`
                }
              },
            include: Diets
        })

        if(bd_encontrados.length){
            bd_encontrados.forEach((bd)=>{
                const easyId= bd.dataValues.ID+2000000;
                const dietsName= bd.dataValues.diets.map((ND)=>{
                    return ND.name
                })
                const newBd= {...bd.dataValues, ID:easyId, diets:dietsName};
                

                buscados.push(newBd)
            })
           }

       buscados.push(...recetas_cortadas)
            res.json(buscados)


    } catch (error) {
        res.status(500).send("No se encontro ninguna receta")
    }
}

module.exports={
    getRecipe,
    getDiets,
    postRecipe,
    recipeName
}