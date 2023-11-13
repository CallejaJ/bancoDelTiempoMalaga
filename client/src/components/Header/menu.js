

const userMenuPages = [
    { Text: "Inicio", location: "/home" },
    { Text: "Panel de usuario", location: "/panel" },
    { Text: "Ofertas", location: "/offers" },
    { Text: "Demandas", location: "/requests" },
    { Text: "Transferencias", location: "/panel/transferorders" },
    { Text: "¿Cómo funciona?", location: "/userguide" },
]

const adminMenuPages = [
    { Text: "Inicio", location: "/home" },
    { Text: "Panel de administrador", location: "/adminpanel" },
    { Text: "Ofertas", location: "/offers" },
    { Text: "Demandas", location: "/requests" },
    { Text: "Transferencias", location: "/panel/transferorders" },
    { Text: "¿Cómo funciona?", location: "/userguide" },
]

const visitorMenuPages = [
    { Text: "Inicio", location: "/home", },
    { Text: "Ofertas", location: "/offers", },
    { Text: "Demandas", location: "/requests", },
    { Text: "¿Cómo funciona?", location: "/userguide", },
]

export const menu = {
    0: userMenuPages,
    1: adminMenuPages,
    2: visitorMenuPages
}