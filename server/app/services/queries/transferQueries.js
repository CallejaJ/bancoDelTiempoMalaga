const db = require("../mysql");
const moment = require("moment");
const transferQueries = {}
const utils = require("../../helpers/utils")

transferQueries.getOfferTransfers = async (user_id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        // hacer join con offers para traerme el nombre de la oferta
        // hacer join con user para traerme el nombre del que publicó la oferta
        // hacer join con user para traerme el nombre del usuario que ha recibido el servicio
        // añadir un where que iguale el user id de la tabla ofertas con el id que nos mandó el dao
        return await db.query
            ('SELECT ocm.credits, ocm.id, ocm.register_date, o.name AS offername, uowner.name AS uownername, urecipient.name AS urecipientname' +
                ' FROM offer_credits_messages AS ocm' +
                ' JOIN offers AS o ON ocm.offers_id = o.id ' +
                ' JOIN user AS uowner ON uowner.id = o.user_id' +
                ' JOIN user AS urecipient ON ocm.service_recipient = urecipient.id' +
                ' WHERE ocm.service_recipient = ? '
                , user_id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

transferQueries.addOrderTransfer = async (id, transferData) => {

    let conn = null
    try {
        conn = await db.createConnection()
        let newTransferOrderObj = {
            service_recipient: transferData.service_recipient,
            register_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            credits: transferData.credits,
            offers_id: id,
        }

        return await db.query("INSERT INTO offer_credits_messages SET?", newTransferOrderObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}


transferQueries.getOfferTransferById = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM offer_credits_messages WHERE id= ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

transferQueries.deleteOrderTransfer = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('DELETE FROM offer_credits_messages WHERE id = ?', id, 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
    }
}


module.exports = transferQueries;