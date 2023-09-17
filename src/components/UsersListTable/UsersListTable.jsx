import { useEffect, useState } from "react"
import UsersListTableView from "./UserListTableView"

export default function UsersListTable() {

    let [usersList, setUsersList] = useState([])

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
        []
    )


    return (
        <UsersListTableView usersList={usersList} />
    )
}