import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(
    {
        user: null,
        loginMessage: null,
        registerMessage: null,
        login: () => { },
        logout: () => { },
        register: () => { }
    });

const USER_KEY = "USER_KEY"
const TOKEN_KEY = "TOKEN_KEY"

export default function AuthContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [loginMessage, setLoginMessage] = useState(null);
    const [registerMessage, setRegisterMessage] = useState(null);

    setTimeout(() => {
        setRegisterMessage(null)
    }, 3000)

    setTimeout(() => {
        setLoginMessage(null)
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
                console.log(user);
                setUser(user)
                localStorage.setItem(USER_KEY, JSON.stringify(user))
                localStorage.setItem(TOKEN_KEY, token.jwt)
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
                console.log("Usuario registrado");
                setRegisterMessage("¡Registro correcto! Ya puedes iniciar sesión.")
            } else {
                setRegisterMessage("El usuario ya existe. Inicia sesión.")
            }
        }
        catch (err) {
            throw new Error(err.message)
        }
    }


    function logout() {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        setUser(null)
    }

    const value = {
        user, login, logout, loginMessage, registerMessage, register
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    return useContext(AuthContext);
}