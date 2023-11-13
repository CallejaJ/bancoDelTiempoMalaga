const express = require("express");
const creditController = require("../controllers/creditController")

const creditRouter = express.Router();


// crear una nueva transferencia directa de créditos por solicitud del usuario ofertante
creditRouter.post("/transfer/:id", creditController.transferCreditsRequested);

// crear una nueva transferencia directa de créditos por el usuario demandante
creditRouter.post("/transfer", creditController.transferCredits);

module.exports = creditRouter