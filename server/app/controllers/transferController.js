const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");
const transferQueries = require("../services/queries/transferQueries");

let transferController = {};


transferController.getOfferTransfers = async (req, res) => {

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
        let response = await dao.getOfferTransfers(payload.id);
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


// crear una nueva petición
transferController.addOrderTransfer = async (req, res) => {

    const { authorization } = req.headers
    if (!authorization) return res.sendStatus(401)
    const token = authorization.split(' ')[1]
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );

    const { id } = req.params
    const { service_recipient, credits } = req.body;

    if (!service_recipient || !credits) return res.status(400).send("Error al recibir del body");
    try {

        const addOrderTransfer = await dao.addOrderTransfer(id, req.body, payload.id)
        if (addOrderTransfer) {
            return res.send(`Petición a ${service_recipient} de la oferta ${id} realizada`);
        }
        else {
            return res.sendStatus(500);
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}


transferController.getOfferTransferById = async (req, res) => {
    const { id } = req.params
    if (!req.params) return res.sendStatus(500)

    try {
        let response = await dao.getOfferTransferById(id);
        [response] = response;

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

// borrar una petición 
transferController.deleteOrderTransfer = async (req, res) => {

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
        const transfer = await dao.getOfferTransferById(id);
        if (transfer.length === 0) return res.status(404).send("La solicitud no existe");
        console.log("transfer" + transfer.id)
        // si existe, eliminamos la oferta por el id
        await dao.deleteOrderTransfer(id);
        const newOfferTransferList = await dao.getOfferTransfers(payload.id)
        console.log(newOfferTransferList);
        // devolvemos la respuesta
        res.send(newOfferTransferList)
    }
    catch (err) {
        console.log(err);
    }
};


module.exports = transferController;