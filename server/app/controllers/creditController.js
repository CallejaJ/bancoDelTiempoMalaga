const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");

let creditController = {};

creditController.transferCreditsRequested = async (req, res) => {

    const { authorization } = req.headers
    if (!authorization) return res.sendStatus(401)
    const token = authorization.split(' ')[1]
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(token, encoder.encode(process.env.JWT_SECRET));

    if (!req.params) return res.sendStatus(500)
    const { id } = req.params // id de la tabla ocm

    // query que contenga: créditos a transferir, user_id de quien envía, user_id de quien recibe
    // número de créditos de quien envía y número de créditos de quien recibe 
    let credits_balance = await dao.getTransferDetailsRequested(id); // lo que me devolvió la query
    [credits_balance] = credits_balance

    // comprobar que el usuario que hace la petición sea el que envía los créditos
    if (credits_balance.usenderid != payload.id) {
        return res.sendStatus(401)
    }

    // hacer la resta de créditos de quien envía y la suma de quien recibe
    const credits = credits_balance.credits
    const newSenderCredits = credits_balance.usendercr - credits
    const newBeneficiaryCredits = credits_balance.ubeneficiarycr + credits

    // guardar en la base de datos los nuevos créditos de cada usuario
    await dao.updateCreditsBalance(credits_balance.ubeneficiaryid, newBeneficiaryCredits)
    await dao.updateCreditsBalance(credits_balance.usenderid, newSenderCredits)

    // eliminar el registro de la tabla de offer_credits_messages
    await dao.deleteOfferMessagesRegistry(id)

    let userDetailsResponse = await dao.getUserById(payload.id);
    [userDetailsResponse] = userDetailsResponse

    let response = {
        offerTransferList: await dao.getOfferTransfers(payload.id),
        userDetails: userDetailsResponse
    }
    return res.send(response)
}

creditController.transferCredits = async (req, res) => {

    const { authorization } = req.headers
    if (!authorization) return res.sendStatus(401)
    const token = authorization.split(' ')[1]
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
        token,
        encoder.encode(process.env.JWT_SECRET)
    );

    const { credits, beneficiaryID } = req.body;
    if (!credits || !beneficiaryID) return res.status(400).send("Error al recibir del body");

    // por el body me vienen los créditos a transferir, y el user_id de quien recibe(beneficiary)
    // tengo el usuario que envía los créditos del payload,
    // query que incluya: número de créditos de quien envía y número de créditos de quien recibe

    let senderCredits = await dao.getCreditDetailsById(payload.id);
    [senderCredits] = senderCredits
    senderCredits = senderCredits.credits

    let beneficiaryCredits = await dao.getCreditDetailsById(beneficiaryID);
    [beneficiaryCredits] = beneficiaryCredits
    beneficiaryCredits = beneficiaryCredits.credits

    // no es necesario comprobar que el usuario que hace la petición 
    // sea el que envía los créditos porque lo recibo del payload.id

    // realizar la resta de créditos de quien envía y la suma de quien recibe
    const newSenderCredits = senderCredits - credits
    const newBeneficiaryCredits = beneficiaryCredits + credits

    // guardar en la base de datos los nuevos créditos de cada usuario
    // (update credits)
    await dao.updateCreditsBalance(beneficiaryID, newBeneficiaryCredits)
    await dao.updateCreditsBalance(payload.id, newSenderCredits)

    return res.send("transferencia realizada")

}

module.exports = creditController;
