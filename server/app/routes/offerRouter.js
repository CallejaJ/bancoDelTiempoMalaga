const express = require("express");
const offerController = require("../controllers/offerController")

const offerRouter = express.Router();

// obtener los datos de todas las ofertas
offerRouter.get("/", offerController.getOffers);

// // obtener los datos de una oferta por id
offerRouter.get("/:id", offerController.getOfferById);

// obtener las ofertas de un usuario por su id
offerRouter.get("/user/:id", offerController.getUserOffers);

// crear una nueva oferta
offerRouter.post("/", offerController.addOffer);

// borrar una oferta publicada por un usuario
offerRouter.delete("/:id", offerController.deleteOffer);

// modificar una oferta publicada por un usuario
offerRouter.patch("/:id", offerController.updateOffer);

// actualizar una oferta publicada por un usuario
offerRouter.put("/:id", offerController.updateOffer);


module.exports = offerRouter;