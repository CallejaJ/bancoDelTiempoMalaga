import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(
    {
        user: null,
        token: null,
        loginMessage: null,
        registerMessage: null,
        updateUserMessage: null,
        newOfferMessage: null,
        newRequestMessage: null,
        deleteOfferMessage: null,
        deleteRequestMessage: null,
        updateServiceMessage: null,
        servicesList: null,
        newServiceMessage: null,
        login: () => { },
        logout: () => { },
        register: () => { },
        refresh: () => { },
        deleteOffer: () => { },
        deleteRequest: () => { },
        addOffer: () => { },
        addRequest: () => { },
        deleteUser: () => { },
        updateService: () => { },
        setUpdateServiceMessage: () => { },
        addService: () => { }
    });

const USER_KEY = "USER_KEY"
const TOKEN_KEY = "TOKEN_KEY"

export default function AuthContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) ?? null)

    const [loginMessage, setLoginMessage] = useState(null);
    const [registerMessage, setRegisterMessage] = useState(null);

    const [updateUserMessage, setUpdateUserMessage] = useState(null);
    const [deleteOfferMessage, setDeleteOfferMessage] = useState(null);
    const [deleteRequestMessage, setDeleteRequestMessage] = useState(null);
    const [deleteServiceMessage, setDeleteServiceMessage] = useState(null);

    const [newOfferMessage, setNewOfferMessage] = useState(null);
    const [newRequestMessage, setNewRequestMessage] = useState(null);

    const [newServiceMessage, setNewServiceMessage] = useState(null);


    let [userOffersList, setUserOffersList] = useState([])
    let [userRequestsList, setUserRequestsList] = useState([])
    let [usersList, setUsersList] = useState([])

    let [servicesList, setServicesList] = useState([]);

    const [updateServiceMessage, setUpdateServiceMessage] = useState(null)




    setTimeout(() => {
        setLoginMessage(null)
    }, 3000)

    setTimeout(() => {
        setRegisterMessage(null)
    }, 3000)


    setTimeout(() => {
        setUpdateUserMessage(null)
    }, 3000)

    setTimeout(() => {
        setDeleteOfferMessage(null)
    }, 3000)

    setTimeout(() => {
        setDeleteRequestMessage(null)
    }, 3000)

    setTimeout(() => {
        setDeleteServiceMessage(null)
    }, 3000)

    setTimeout(() => {
        setUpdateServiceMessage(null)
    }, 3000)

    setTimeout(() => {
        setNewServiceMessage(null)
    }, 3000)




    async function login({ email, password }) {
        try {
            const response = await fetch("http://localhost:3006/user/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, password: password })
            })
            if (response.ok) {
                const token = await response.json()
                const user = jwtDecode(token.jwt)
                // lo guarda en el contexto
                setUser(user)
                setToken(token.jwt)
                // lo guarda en el almacena.local
                localStorage.setItem(USER_KEY, JSON.stringify(user))
                localStorage.setItem(TOKEN_KEY, `${token.jwt}`)
                setLoginMessage("Ya puedes navegar")
            }
            else {
                setLoginMessage("Hay errores en el formulario. Inténtalo de nuevo")
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async function register(
        { name, surname, district, address, pobox, newEmail, password }) {
        try {
            const response = await fetch("http://localhost:3006/user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, surname: surname, district: district, address: address, pobox: pobox, email: newEmail, password: password })
            })
            if (response.ok) {
                setRegisterMessage("¡Registro correcto! Ya puedes iniciar sesión.")
            } else {
                setRegisterMessage("El usuario ya existe. Inicia sesión.")
            }
        }
        catch (err) {
            throw new Error(err.message)
        }
    }

    async function refresh() {

        const response = await fetch(
            `http://localhost:3006/user/${user.id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        )
        if (response.ok) {
            setUser(await response.json())
            setUpdateUserMessage("¡Usuario actualizado!")
        } else {
            setUpdateUserMessage("Inténtalo de nuevo.")
        }

    }

    async function addOffer(values) {
        try {
            const response = await fetch(`http://localhost:3006/offers/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })
            console.log(values);

            if (response.ok) {
                setNewOfferMessage("Tu oferta ha sido creada.")
            } else {
                setNewOfferMessage("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
    }

    async function addRequest(values) {
        try {
            const response = await fetch(`http://localhost:3006/requests/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })
            if (response.ok) {
                setNewRequestMessage("Tu demanda ha sido creada.")
            } else {
                setNewRequestMessage("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
    }

    async function deleteOffer(id) {
        try {
            const response = await fetch(
                `http://localhost:3006/offers/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            if (response.ok) {
                const newOffersList = await response.json()
                setUserOffersList(newOffersList)
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async function deleteRequest(id) {
        try {
            const response = await fetch(
                `http://localhost:3006/requests/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            if (response.ok) {
                const newRequestsList = await response.json()
                setUserRequestsList(newRequestsList)
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async function deleteUser(id) {
        try {
            const response = await fetch(
                `http://localhost:3006/user/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            if (response.ok) {
                const newUsersList = await response.json()
                setUsersList(newUsersList)
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async function deleteService(id) {
        try {
            const response = await fetch(
                `http://localhost:3006/services/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            if (response.ok) {
                const newServicesList = await response.json()
                setServicesList(newServicesList)
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async function addService(values) {
        try {
            const response = await fetch(
                `http://localhost:3006/services/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })
            if (response.ok) {
                const newServicesList = await response.json()
                setServicesList(newServicesList)
                setNewServiceMessage("Categoría creada")
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }


    function logout() {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        setUser(null)
        setToken(null)
    }

    const value = {
        user, token,
        login, logout, register, refresh, 
        newOfferMessage, newRequestMessage,
        loginMessage, registerMessage, updateUserMessage,
        userOffersList, setUserOffersList,
        deleteOffer, deleteOfferMessage,
        userRequestsList, setUserRequestsList,
        addOffer, addRequest,
        deleteService, deleteServiceMessage,
        usersList, deleteUser, setUsersList,
        deleteRequest, deleteRequestMessage,
        servicesList, setServicesList,
        updateServiceMessage, setUpdateServiceMessage,
        addService, newServiceMessage
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    return useContext(AuthContext);
}