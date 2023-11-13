const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");

let requestController = {};


// obtener los datos de todas las demandas

requestController.getRequests = async (req, res) => {

    try {
        let requestList = await dao.getRequests();
        if (requestList) {
            return res.send(requestList)
        }
        else {
            return res.sendStatus(500)
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}


// obtener los datos de una demanda por su ID

requestController.getRequestById = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params

    try {
        let response = await dao.getRequestById(id);
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


// obtener las demandas de un usuario por su ID

requestController.getUserRequests = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params

    try {
        //obtenemos las demandas por su id
        const userRequestsList = await dao.getUserRequests(id);
        if (userRequestsList) {
            return res.send(userRequestsList);
        }
        else {
            return res.sendStatus(500);
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}



requestController.addRequest = async (req, res) => {

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

    // busco cuantas demandas ha publicado el usuario, el número lo almaceno en una constante
    // condición max. 3

    let countRequests = await dao.countUserRequests(payload.id);
    [countRequests] = countRequests;
    countRequests = countRequests.number_of_requests;
    console.log(countRequests);
    if (countRequests > 2) return res.sendStatus(403)

    // busco cuantos créditos tiene el usuario, el número lo almaceno en una constante
    // condición máx. -20

    let countCredits = await dao.getCreditDetailsById(payload.id);
    [countCredits] = countCredits;
    countCredits = countCredits.credits
    console.log(countCredits);
    if (countCredits < -20) return res.sendStatus(423)

    const { name, description, services_id, credits } = req.body;

    if (!name || !description || !services_id || !credits) return res.status(400).send("Error al recibir del body");
    try {
        const addRequest = await dao.addRequest(req.body, payload.id)
        if (addRequest) {
            return res.sendStatus(200);
        }
        else {
            return res.sendStatus(500);
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}



requestController.updateRequest = async (req, res) => {

    const { id } = req.params

    const { name, description, services_id, user_id, credits } = req.body;

    if (!name || !description || !services_id || !user_id || !credits) return res.status(400).send("Error al recibir del body");
    try {
        let updateRequest = await dao.updateRequest(id, req.body)
        if (updateRequest) return res.send(`Demanda con id ${id} actualizada.`)
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

requestController.deleteRequest = async (req, res) => {

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
        const request = await dao.getRequestById(id);
        if (request.length === 0) return res.status(404).send("La demanda no existe");
        console.log("request" + request.id)
        // si existe, eliminamos el usuario por el id
        await dao.deleteRequest(id);
        const newRequestsList = await dao.getUserRequests(payload.id)
        console.log(newRequestsList);
        // devolvemos la respuesta
        res.send(newRequestsList)
    }
    catch (err) {
        console.log(err);
    }
};


// recibo un array de objetos con las demandas y tengo que recorrer el array en un bucle que por cada iteración haga una query
// const result = []
// for (const request of requestList) {
//     let [List] = await dao.getUserrequests(request.requestList)
//     result.push({ ...request, List })




module.exports = requestController;