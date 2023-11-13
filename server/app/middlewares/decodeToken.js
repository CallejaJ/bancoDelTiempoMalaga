export async function DecodeToken() {

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

    return payload
}