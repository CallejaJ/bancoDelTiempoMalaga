const db = require("../mysql");
const moment = require("moment");
const messageQueries = {}
const utils = require("../../helpers/utils")



messageQueries.getOfferMessagesById = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query(
            'SELECT om.id, om.message, om.register_date, u.name ' +
            'FROM offer_messages as om JOIN user as u ON u.id = om.user_id ' +
            'WHERE om.offers_id= ? ',
            id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}


messageQueries.addMessageToOffer = async (id, messageData, user_id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        let newMessageObj = {
            message: messageData.message,
            register_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            offers_id: id,
            user_id: user_id
        }

        return await db.query("INSERT INTO offer_messages SET?", newMessageObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}


messageQueries.getRequestMessagesById = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query(
            'SELECT rm.id, rm.message, rm.register_date, u.name ' +
            'FROM request_messages as rm JOIN user as u ON u.id = rm.user_id ' +
            'WHERE rm.requests_id= ? ',
            id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}


messageQueries.addMessageToRequest = async (id, messageData, user_id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        let newMessageObj = {
            message: messageData.message,
            register_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            requests_id: id,
            user_id: user_id
        }

        return await db.query("INSERT INTO request_messages SET?", newMessageObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}





module.exports = messageQueries;