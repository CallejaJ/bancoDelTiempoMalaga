const md5 = require("md5");

const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");

// const userController = {}; // lo comentamos para que funcione el testing
// creamos  la variable usercontroller con dao para sea visible desde mi test, y lo pueda modificar
let userController = {};



userController.getUser = async (req, res) => {

    const { id } = req.params;
    // extraigo el payload del token y comprobar su autenticidad y caducidad
    const { authorization } = req.headers;

    // si no existe enviamos un 401 (unauthorized)
    if (!authorization) return res.sendStatus(401);

    // obtenemos el token de la cabecera
    const token = authorization.split(" ")[1];
    // split [1] para quitar la palabra BEARER y quedarnos con la posición 1

    try {
        // codificamos la clave secreta
        const encoder = new TextEncoder();
        // verificamos el token con la función jwtverify. Le pasamos el token y la clave secreta codificada.
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        console.log(payload);

        // buscamos si el id del usuario existe en la base de datos
        let user = await dao.getUserById(id);

        [user] = user;
        if (!user) {
            return res.sendStatus(404).send("El usuario no existe")
        } else {
            user.password = ""
            user.confirmPassword = ""
            return res.send(user)
        }
    }

    catch (err) {
        throw new Error(err.message);
    }
}

userController.addUser = async (req, res) => {
    const { name, surname, district, address, pobox, email, password } = req.body;

    if (!name || !surname || !email || !password || !district || !address || !pobox) return res.status(400).send("Error al recibir del body");
    try {
        let user = await dao.getUserByEmail(email)
        if (user.length > 0) return res.status(409).send("Usuario ya registrado");
        const addUser = await dao.addUser(req.body)
        if (addUser) {
            return res.send(`Usuario ${name} con id: ${addUser} registrado`);
        }
        else {
            return res.sendStatus(500);
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}

userController.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Error al recibir del body");
    try {
        let user = await dao.getUserByEmail(email);
        [user] = user;
        if (!user) {
            // el email no existe
            return res.status(404).send("usuario no encontrado")
        }
        if (md5(password) !== user.password) {
            console.log(md5(password));
            console.log(user.password);
            return res.status(401).send("password incorrecta")
        }
        // le metemos el rol en el constructor del login
        const jwtConstructor = new SignJWT({
            name: user.name,
            surname: user.surname,
            email: user.email,
            id: user.id,
            role: user.role
        });
        const encoder = new TextEncoder();
        const jwt = await jwtConstructor
            .setProtectedHeader({ alg: 'HS256', typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime('3h')
            .sign(encoder.encode(process.env.JWT_SECRET));

        console.log(jwt);
        return res.send({ jwt })
    }
    catch (err) {
        console.log(err)
        return res.sendStatus(401);
    }
}

userController.getUsersList = async (req, res) => {

    try {
        const usersList = await dao.getUsers();
        if (usersList) {
            return res.send(usersList)

        }
        else {
            return res.sendStatus(500)
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}

userController.updateUser = async (req, res) => {

    const { id } = req.params

    // extraigo el payload del token y comprobar su autenticidad y caducidad
    const { authorization } = req.headers;
    if (!authorization) return res.sendStatus(401);

    // si no nos llega ningún campo por el body
    if (Object.entries(req.body).length === 0) return res.status(400).send("Error al recibir el body");

    // obtenemos el token de la cabecera
    const token = authorization.split(" ")[1];
    // split [1] para quitar la palabra BEARER y quedarnos con la posición 1

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        console.log(payload);

        // verificamos que el id del payload es el mismo que el id del usuario que queremos modificar
        if (payload.id !== Number(id)) return res.status(401).send("Usuario no autorizado");
        console.log(payload.id)
        console.log(Number(id))
        // si todo va bien actualizo
        const updateUser = await dao.updateUser(id, req.body)
        if (updateUser) return res.send(`Usuario con id ${id} actualizado.`)
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

userController.deleteUser = async (req, res) => {

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

    // verificamos que seamos el usuario administrador
    if (!payload.role) return res.status(401).send("No tiene permisos de administrador");
    console.log(payload.role);

    try {
        const user = await dao.getUserById(id);
        if (user.length === 0) return res.status(404).send("El usuario no existe");
        console.log("user" + user.id)
        // si existe, eliminamos la oferta por el id
        await dao.deleteUser(id);
        const newUsersList = await dao.getUsers(payload.id)
        // devolvemos la respuesta
        console.log(newUsersList);
        // devolvemos la respuesta
        res.send(newUsersList)
    }
    catch (err) {
        throw new Error(err.message);
    }
};

module.exports = userController;