const express = require("express");
const messageController = require("../controllers/messageController")

const messageRouter = express.Router();

//** HILO DE MENSAJES EN OFERTAS **//

// // obtener todos los mensajes de una oferta por su id
messageRouter.get("/offer/:id", messageController.getOfferMessagesById);

// crear una nuevo mensaje
messageRouter.post("/offer/:id", messageController.addMessageToOffer);


//** HILO DE MENSAJES EN DEMANDAS **//

// // obtener todos los mensajes de una demanda por su id
messageRouter.get("/request/:id", messageController.getRequestMessagesById);

// crear una nuevo mensaje
messageRouter.post("/request/:id", messageController.addMessageToRequest);




module.exports = messageRouter