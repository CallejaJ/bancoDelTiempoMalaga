const db = require("../mysql");
const moment = require("moment");
const creditQueries = {}
const utils = require("../../helpers/utils")

// hacer una query que contenga:
// creditos a transferir, user_id de quien envía, user_id de quien recibe  
// el número de créditos de quien envía y el número de créditos de quien recibe 

creditQueries.getTransferDetailsRequested = async (id) => {

    let conn = null

    // 1. Unir la tabla ocm con la tabla ofertas, para obtener el id de la oferta
    // 2. Unir la tabla ocm con la tabla usuario, para obtener el usuario que recibe los créditos, y su saldo en creditos
    // 3. Unir la tabla ocm con la tabla usuario, para obtener el usuario que envia los créditos, y su saldo en creditos

    try {
        conn = await db.createConnection()
        return await db.query
            ('SELECT ocm.credits, ubeneficiary.id AS ubeneficiaryid, usender.id AS usenderid, ' +
                ' ubeneficiary.credits AS ubeneficiarycr, usender.credits AS usendercr ' +
                ' FROM offer_credits_messages AS ocm' +
                ' JOIN offers AS o ON ocm.offers_id = o.id ' +
                ' JOIN user AS ubeneficiary ON ubeneficiary.id = o.user_id' +
                ' JOIN user AS usender ON ocm.service_recipient = usender.id' +
                ' WHERE ocm.id = ? '
                , id, 'select', conn
            )
    }
    catch (err) {
        throw new Error(err.message)
    }
    finally {
        conn && await conn.end();
    }
}

creditQueries.updateCreditsBalance = async (user_id, credits) => {
    // si credits es undefined lanzar un error
    console.log(credits);
    let conn = null
    try {
        conn = await db.createConnection()
        let updateCreditsObject = {
            credits: credits,
            update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        // updateCreditsObject = await utils.removeUndefinedKeys(updateCreditsObject)

        return await db.query('UPDATE user SET ? WHERE id = ?', [updateCreditsObject, user_id], 'update', conn)
    }
    catch (e) {
        throw new Error(e.message)
    }
    finally {
        conn && await conn.end();
    }
}

creditQueries.deleteOfferMessagesRegistry = async (id) => {

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

creditQueries.getCreditDetailsById = async (userID) => {

    let conn = null

    try {
        conn = await db.createConnection()
        return await db.query
            ('SELECT credits FROM user WHERE id = ? ', userID, 'select', conn)
    }
    catch (err) {
        throw new Error(err.message)
    }
    finally {
        conn && await conn.end();
    }
}

module.exports = creditQueries;