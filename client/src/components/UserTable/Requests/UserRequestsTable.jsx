import { useEffect } from "react"
import UserRequestsTableView from "./UserRequestsTableView"
import { useAuthContext } from "../../../context/AuthContext"

export default function UserRequestsTable() {

    const { user, userRequestsList, setUserRequestsList } = useAuthContext()

    useEffect(function () {
        async function getUserRequestsList() {
            try {
                const response = await fetch(`http://localhost:3006/requests/user/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setUserRequestsList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getUserRequestsList()
    },
        [user.id, setUserRequestsList]
    )


    return (
        <UserRequestsTableView userRequestsList={userRequestsList} />
    )
}