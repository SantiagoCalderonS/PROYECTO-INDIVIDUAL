const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getRecipe, getDiets, postRecipe, recipeName}= require("../controladores/controladores.js")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/:id", getRecipe);
router.get("/recipe/name",recipeName);
router.post("/recipes", postRecipe);
router.get("/diets", getDiets);

module.exports = router;
