const express = require("express");
const serviceController = require("../controllers/serviceController");
const serviceRouter = express.Router()

/**
 * Router para obtener el listado de servicios
 */

serviceRouter.get("/", serviceController.getServices)

serviceRouter.get("/:id", serviceController.getServiceById)

/**
 * Router para añadir un nuevo servicio por el administrador
 */

serviceRouter.post("/", serviceController.addService);

// borrar un servicio por su identificador
serviceRouter.delete("/:id", serviceController.deleteService);

// // modificar una servicio por su identificador
serviceRouter.patch("/:id", serviceController.updateService);

// actualizar un servicio por su identificador
serviceRouter.put("/:id", serviceController.updateService);


module.exports = serviceRouter;