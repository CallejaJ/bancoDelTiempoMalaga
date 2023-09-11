import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(
    {
        user: null,
        token: null,
        loginMessage: null,
        registerMessage: null,
        updateUserMessage: null,
        login: () => { },
        logout: () => { },
        register: () => { },
        refresh: () => { }
    });

const USER_KEY = "USER_KEY"
const TOKEN_KEY = "TOKEN_KEY"

export default function AuthContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [loginMessage, setLoginMessage] = useState(null);
    const [registerMessage, setRegisterMessage] = useState(null);
    const [updateUserMessage, setUpdateUserMessage] = useState(null);

    const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) ?? null)

    setTimeout(() => {
        setLoginMessage(null)
    }, 3000)

    setTimeout(() => {
        setRegisterMessage(null)
    }, 3000)


    setTimeout(() => {
        setUpdateUserMessage(null)
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


    function logout() {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        setUser(null)
        setToken(null)
    }

    const value = {
        user, token, login, logout, register, refresh, loginMessage, registerMessage, updateUserMessage
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    return useContext(AuthContext);
}