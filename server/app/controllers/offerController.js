const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");

let offerController = {};


// obtener los datos de todas las ofertas

offerController.getOffers = async (req, res) => {

    try {
        const offerList = await dao.getOffers();
        if (offerList) {
            return res.send(offerList)
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

offerController.getOfferById = async (req, res) => {
    if (!req.params) return res.sendStatus(500)
    const { id } = req.params

    try {
        let response = await dao.getOfferById(id);
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


// obtener las ofertas de un usuario por su ID

offerController.getUserOffers = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params

    try {
        //obtenemos las ofertas por su id
        const userOffersList = await dao.getUserOffers(id);
        if (userOffersList) {
            return res.send(userOffersList);
        }
        else {
            return res.sendStatus(500);
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}




offerController.addOffer = async (req, res) => {

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


    const { name, description, services_id, credits } = req.body;

    if (!name || !description || !services_id || !credits) return res.status(400).send("Error al recibir del body");
    try {

        // busco cuantas ofertas ha publicado el usuario, el número lo almaceno en una constante
        // condición

        let countOffers = await dao.countUserOffers(payload.id);
        [countOffers] = countOffers;
        countOffers = countOffers.number_of_offers
        console.log(countOffers);
        if (countOffers > 2) return res.sendStatus(403)

        const addOffer = await dao.addOffer(req.body, payload.id)
        if (addOffer) {
            return res.send(`Oferta ${name} con id: ${addOffer} creada`);
        }
        else {
            return res.sendStatus(500);
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}


offerController.updateOffer = async (req, res) => {

    const { id } = req.params
    const { name, description, services_id, user_id, credits } = req.body;
    if (!name || !description || !services_id || !user_id || !credits) return res.status(400).send("Error al recibir del body");
    try {
        let updateOffer = await dao.updateOffer(id, req.body)
        if (updateOffer) return res.send(`Oferta con id ${id} actualizada.`)
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

offerController.deleteOffer = async (req, res) => {

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
        const offer = await dao.getOfferById(id);
        if (offer.length === 0) return res.status(404).send("La oferta no existe");
        console.log("service" + offer.id)
        // si existe, eliminamos la oferta por el id
        await dao.deleteOffer(id);
        const newOffersList = await dao.getUserOffers(payload.id)
        console.log(newOffersList);
        // devolvemos la respuesta
        res.send(newOffersList)
    }
    catch (err) {
        console.log(err);
    }
};



module.exports = offerController;