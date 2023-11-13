const express = require("express");
const requestController = require("../controllers/requestController")
const requestRouter = express.Router();



// obtener los datos de todas las demandas
requestRouter.get("/", requestController.getRequests);

// // obtener los datos de una demanda por su id
requestRouter.get("/:id", requestController.getRequestById);

// obtener las demandas de un usuario por su id
requestRouter.get("/user/:id", requestController.getUserRequests);

// crear una nueva demanda
requestRouter.post("/", requestController.addRequest);

// borrar una demanda publicada por un usuario
requestRouter.delete("/:id", requestController.deleteRequest);

// modificar una demanda publicada por un usuario
requestRouter.patch("/:id", requestController.updateRequest);

// actualizar una demanda publicada por un usuario
requestRouter.put("/:id", requestController.updateRequest);

module.exports = requestRouter;