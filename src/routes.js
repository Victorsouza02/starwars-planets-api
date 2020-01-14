const { Router } = require("express");
const {check,validationResult} = require('express-validator');
const planetaController = require("./controllers/planetaController");
const router = Router();

router.post("/planetas",[
    //VALIDAÇÃO DOS CAMPOS
    check("nome","Campo NOME é obrigatório").isLength({min: 1}),
    check("clima","Campo CLIMA é obrigatório").isLength({min: 1}),
    check("terreno","Campo TERRENO é obrigatório").isLength({min: 1})
], planetaController.store);
router.get("/planetas", planetaController.index);
router.delete("/planetas/:id", planetaController.deleteId);

module.exports = router;