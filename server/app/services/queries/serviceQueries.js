const db = require("../mysql");
const moment = require("moment");
const serviceQueries = {}
const utils = require("../../helpers/utils")



serviceQueries.getServices = async () => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM services', [], 'select', conn)
    } catch (err) {
        console.log(err);
    } finally {
        conn && await conn.end();
    }
}

serviceQueries.getServiceById = async (id) => {

    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM services WHERE id= ?', id, 'select', conn)
    } catch (err) {
        throw new Error(err.message)
    } finally {
        conn && await conn.end();
    }
}

serviceQueries.addService = async (serviceData) => {

    let conn = null
    try {
        conn = await db.createConnection()
        let newServiceObj = {
            name: serviceData.name,
            register_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        // newServiceObj = await utils.removeUndefinedKeys(newServiceObj)
        return await db.query("INSERT INTO services SET?", newServiceObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

serviceQueries.deleteService = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('DELETE FROM services WHERE id = ?', id, 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
    }
}

serviceQueries.updateService = async (id, serviceData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        let updateServiceObj = {
            name: serviceData.name,
            update_date: moment().format("YYYY-MM-DD HH:mm:ss")
        }

        updateServiceObj = await utils.removeUndefinedKeys(updateServiceObj)

        return await db.query('UPDATE services SET ? WHERE id = ?', [updateServiceObj, id], 'update', conn)
    }
    catch (e) {
        throw new Error(e)
    }
    finally {
        conn & await conn.end();
    }
}


module.exports = serviceQueries;