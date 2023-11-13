const { jwtVerify } = require("jose")
const dao = require("../services/dao")
const serviceController = {}


// obtener la lista de todos los servicios

serviceController.getServices = async (req, res) => {

    try {
        const servicesList = await dao.getServices();
        if (servicesList) {
            return res.send(servicesList)
        }
        else {
            return res.sendStatus(500)
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}

// obtener los datos de una oferta por su ID

serviceController.getServiceById = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params
    try {
        let response = await dao.getServiceById(id);
        [response] = response;
        if (response) {
            return res.send(response)
        }
        else {
            return res.sendStatus(500)
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}

// actualizar un servicio
serviceController.updateService = async (req, res) => {
    const { id } = req.params;
    //  obtenemos la cabecera para coger el token
    const { authorization } = req.headers
    // si no existe el token enviamos un 401
    if (!authorization) return res.sendStatus(401)
    // obtenemos el token y eliminamos el bearer
    const token = authorization.split(' ')[1]

    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );
    const { name } = req.body;
    if (!name) return res.status(400).send("Error al recibir del body");
    try {
        await dao.updateService(id, req.body)
        const newServicesList = await dao.getServices(payload.id)
        // devolvemos la respuesta
        console.log(newServicesList);
        // devolvemos la respuesta
        res.send(newServicesList)
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

// borrar un servicio
serviceController.deleteService = async (req, res) => {
    const { id } = req.params;
    //  obtenemos la cabecera para coger el token
    const { authorization } = req.headers
    // si no existe el token enviamos un 401
    if (!authorization) return res.sendStatus(401)
    // obtenemos el token y eliminamos el bearer
    const token = authorization.split(' ')[1]
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );

    try {
        const service = await dao.getServiceById(id);
        if (service.length === 0) return res.status(404).send("La categoría no existe");
        console.log("service" + service.id)
        // si existe, eliminamos la oferta por el id
        await dao.deleteService(id);
        const newServicesList = await dao.getServices(payload.id)
        // devolvemos la respuesta
        console.log(newServicesList);
        // devolvemos la respuesta
        res.send(newServicesList)
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Añadir un nuevo servicio por el administrador
 * @param {*} req petición
 * @param {*} res respuesta
 */

serviceController.addService = async (req, res) => {
    //  obtenemos la cabecera para coger el token
    const { authorization } = req.headers
    // si no existe el token enviamos un 401
    if (!authorization) return res.sendStatus(401)
    // obtenemos el token y eliminamos el bearer
    const token = authorization.split(' ')[1]
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );
    const { name } = req.body;

    if (!name) return res.status(400).send("Error al recibir del body");

    try {
        await dao.addService(req.body);
        const newServicesList = await dao.getServices(payload.id)
        // devolvemos la respuesta
        console.log(newServicesList);
        // devolvemos la respuesta
        res.send(newServicesList)
    }
    catch (err) {
        console.log(err);
    }
};


module.exports = serviceController;