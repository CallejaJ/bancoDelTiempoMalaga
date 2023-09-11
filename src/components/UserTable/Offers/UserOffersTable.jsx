import { useEffect, useState } from "react"
import UserOffersTableView from "./UserOffersTableView"
import { useAuthContext } from "../../../context/AuthContext"

export default function UserOffersTable() {

    let [userOffersList, setUserOffersList] = useState([])
    const { user } = useAuthContext()
    // const [deleteOfferMessage, setDeleteOfferMessage] = useState(null);

    // setTimeout(() => {
    //     setDeleteOfferMessage(null)
    // }, 3000)


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


    // useEffect(function () {
    //     async function deleteOffer(id) {
    //         try {
    //             const response = await fetch(`http://localhost:3006/offers/${id}`, {
    //                 method: "DELETE",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             })
    //             if (response.ok) {
    //                 setDeleteOfferMessage(await response.json())
    //             }
    //         }
    //         catch (err) {
    //             throw new Error(err)
    //         }
    //     }
    //     deleteOffer()
    // },
    //     []
    // )




    return (
        <UserOffersTableView
            userOffersList={userOffersList}
        // deleteOfferMessage={deleteOfferMessage}

        />
    )
}