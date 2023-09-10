import { useEffect, useState } from "react"
import UserOffersTableView from "./UserOffersTableView"
import { useAuthContext } from "../../../context/AuthContext"

export default function UserOffersTable() {

    let [userOffersList, setUserOffersList] = useState([])
    const { user } = useAuthContext()

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
        [user.id]
    )


    return (
        <UserOffersTableView userOffersList={userOffersList} />
    )
}