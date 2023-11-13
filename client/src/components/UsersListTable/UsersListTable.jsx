import { useEffect } from "react"
import UsersListTableView from "./UserListTableView"
import { useAuthContext } from "../../context/AuthContext"

export default function UsersListTable() {

    const { usersList, setUsersList } = useAuthContext();


    useEffect(function () {
        async function getUsersList() {
            try {
                const response = await fetch(`http://localhost:3006/user`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setUsersList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getUsersList()
    },
        [setUsersList]
    )


    return (
        <UsersListTableView usersList={usersList} />
    )
}