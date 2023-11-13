const db = require("../mysql");
const moment = require("moment");
const requestQueries = {}
const utils = require("../../helpers/utils")

requestQueries.getRequests = async () => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT r.* , u.name AS request_user_name ' +
            'FROM requests AS r JOIN user AS u ON u.id = r.user_id', [], 'select', conn)
    } catch (err) {
        console.log(err);
    } finally {
        conn && await conn.end();
    }
}


requestQueries.getRequestById = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT r.* , u.name AS request_user_name ' +
            ' FROM requests AS r JOIN user AS u ON u.id = r.user_id ' +
            ' WHERE r.id= ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}


requestQueries.getUserRequests = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM requests WHERE user_id= ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

requestQueries.countUserRequests = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT COUNT(*) AS number_of_requests FROM requests WHERE user_id = ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}


requestQueries.addRequest = async (id, requestData) => {

    let conn = null
    try {
        conn = await db.createConnection()
        let newRequestObj = {
            name: requestData.name,
            description: requestData.description,
            credits: requestData.credits,
            services_id: requestData.services_id,
            user_id: id,
            register_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }

        return await db.query("INSERT INTO requests SET?", newRequestObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}


requestQueries.deleteRequest = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('DELETE FROM requests WHERE id = ?', id, 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
    }
}


requestQueries.updateRequest = async (id, requestData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        let updateRequestObj = {
            name: requestData.name,
            description: requestData.description,
            credits: requestData.credits,
            services_id: requestData.services_id,
            user_id: requestData.user_id,
            update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        updateRequestObj = await utils.removeUndefinedKeys(updateRequestObj)
        return await db.query('UPDATE requests SET ? WHERE id = ?', [updateRequestObj, id], 'update', conn)
    }
    catch (e) {
        throw new Error(e)
    }
    finally {
        conn & await conn.end();
    }
}


module.exports = requestQueries;