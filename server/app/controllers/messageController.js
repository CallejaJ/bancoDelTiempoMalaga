const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");

let messageController = {};


//** HILO DE MENSAJES EN OFERTAS **//

// // obtener todos los mensajes de una oferta por su id
messageController.getOfferMessagesById = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params

    try {
        let response = await dao.getOfferMessagesById(id);
        // [response] = response;

        if (response) {
            return res.send(response)
        }
        else {
            return res.sendStatus(404)
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}


// crear una nuevo mensaje
messageController.addMessageToOffer = async (req, res) => {

    //  obtenemos la cabecera para coger el token
    const { authorization } = req.headers
    // si no existe el token enviamos un 401
    if (!authorization) return res.sendStatus(401)
    // obtenemos el token y eliminamos el bearer
    const token = authorization.split(' ')[1]
    console.log(req.body);

    const encoder = new TextEncoder();
    console.log(req.body);

    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );
    console.log(req.body);

    const { id } = req.params
    const { message } = req.body;
    console.log(req.body);

    if (!message) return res.status(400).send("Error al recibir del body");
    try {
        const addMessageToOffer = await dao.addMessageToOffer(id, req.body, payload.id)
        if (addMessageToOffer) {
            const newMessagesList = await dao.getOfferMessagesById(id)
            console.log(newMessagesList);
            // devolvemos la respuesta
            res.send(newMessagesList)
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}

//** HILO DE MENSAJES EN DEMANDAS **//

// // obtener todos los mensajes de una demanda por su id
messageController.getRequestMessagesById = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params

    try {
        let response = await dao.getRequestMessagesById(id);
        // [response] = response;

        if (response) {
            return res.send(response)
        }
        else {
            return res.sendStatus(404)
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}


// crear una nueva demanda

messageController.addMessageToRequest = async (req, res) => {

    //  obtenemos la cabecera para coger el token
    const { authorization } = req.headers
    // si no existe el token enviamos un 401
    if (!authorization) return res.sendStatus(401)
    // obtenemos el token y eliminamos el bearer
    const token = authorization.split(' ')[1]
    console.log(req.body);

    const encoder = new TextEncoder();
    console.log(req.body);

    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );
    console.log(req.body);

    const { id } = req.params
    const { message } = req.body;
    console.log(req.body);

    if (!message) return res.status(400).send("Error al recibir del body");
    try {
        const addMessageToRequest = await dao.addMessageToRequest(id, req.body, payload.id)
        if (addMessageToRequest) {
            const newMessagesList = await dao.getRequestMessagesById(id)
            console.log(newMessagesList);
            // devolvemos la respuesta
            res.send(newMessagesList)
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}
















module.exports = messageController