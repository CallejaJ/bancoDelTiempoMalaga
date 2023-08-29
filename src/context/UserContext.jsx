import { createContext, useState, useContext } from 'react';

const UserContext = createContext(
    {
        userMessagge: null,
        getUser: () => { },
        putUser: () => { }
    });

const USER_KEY = "USER_KEY"
const TOKEN_KEY = "TOKEN_KEY"


export default function UserContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY))
    const [updateUserMessage, setUpdateUserMessage] = useState(null);

    setTimeout(() => {
        setUpdateUserMessage(null)
    }, 3000)



    async function getUser() {
        try {
            console.log(user);
            const response = await fetch(`http://localhost:3006/user/${user.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            if (response.ok) {
                setUser(response)
                setToken(response)
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }



    async function putUser({ name, surname, district, address, pobox, newEmail, password }) {
        try {
            console.log("registrando")
            const response = await fetch("http://localhost:3006/user/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, surname: surname, district: district, address: address, pobox: pobox, email: newEmail, password: password })
            })
            if (response.ok) {
                console.log("Usuario actualizado");
                updateUserMessage("Tus datos han sido actualizados.")
            } else {
                console.log(response);
                updateUserMessage("Inténtalo de nuevo.")
            }
        }
        catch (err) {
            throw new Error(err.message)
        }

    }


    const value = {
        getUser, putUser, updateUserMessage
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
    return useContext(UserContext);
}