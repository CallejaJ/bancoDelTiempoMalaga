const express = require("express");
const transferController = require("../controllers/transferController")

const transferRouter = express.Router();


// // obtener todos las peticiones de creditos de una oferta por su id
transferRouter.get("/offer", transferController.getOfferTransfers);

// crear una nueva petición
transferRouter.post("/offer/:id", transferController.addOrderTransfer);

// // obtener una petición de creditos de una oferta por su id
transferRouter.get("/offer/:id", transferController.getOfferTransferById);

// borrar una petición
transferRouter.delete("/offer/:id", transferController.deleteOrderTransfer);

module.exports = transferRouter