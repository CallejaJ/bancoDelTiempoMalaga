import { useEffect } from "react"
import UserOffersTableView from "./UserOffersTableView"
import { useAuthContext } from "../../../context/AuthContext"

export default function UserOffersTable() {

    const { user, userOffersList, setUserOffersList } = useAuthContext()


    useEffect(function () {
        async function getUserOffersList() {
            try {
                const response = await fetch(`http://localhost:3006/offers/user/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setUserOffersList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getUserOffersList()
    },
        [user.id, setUserOffersList]
    )




    return (
        <UserOffersTableView userOffersList={userOffersList} />
    )
}