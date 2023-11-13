const db = require("../mysql");
const moment = require("moment");
const offerQueries = {}
const utils = require("../../helpers/utils")


offerQueries.getOffers = async () => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT o.* , u.name AS offer_user_name ' +
            'FROM offers AS o JOIN user AS u ON u.id = o.user_id', [], 'select', conn)
    } catch (err) {
        console.log(err);
    } finally {
        conn && await conn.end();
    }
}

offerQueries.getOfferById = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query
            ('SELECT o.* , u.name AS offer_user_name ' +
                ' FROM offers AS o JOIN user AS u ON u.id = o.user_id ' +
                ' WHERE o.id= ?' +
                ' ', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

offerQueries.getUserOffers = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM offers WHERE user_id= ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

offerQueries.countUserOffers = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT COUNT(*) AS number_of_offers FROM offers WHERE user_id = ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

offerQueries.addOffer = async (offerData, id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        let newOfferObj = {
            name: offerData.name,
            description: offerData.description,
            register_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            credits: offerData.credits,
            services_id: offerData.services_id,
            user_id: id
        }

        return await db.query("INSERT INTO offers SET?", newOfferObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

offerQueries.deleteOffer = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('DELETE FROM offers WHERE id = ?', id, 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
    }
}

offerQueries.updateOffer = async (id, offerData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        let updateOfferObj = {
            name: offerData.name,
            description: offerData.description,
            credits: offerData.credits,
            services_id: offerData.services_id,
            user_id: offerData.user_id,
            update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        updateOfferObj = await utils.removeUndefinedKeys(updateOfferObj)

        return await db.query('UPDATE offers SET ? WHERE id = ?', [updateOfferObj, id], 'update', conn)
    }
    catch (e) {
        throw new Error(e)
    }
    finally {
        conn & await conn.end();
    }
}


module.exports = offerQueries;