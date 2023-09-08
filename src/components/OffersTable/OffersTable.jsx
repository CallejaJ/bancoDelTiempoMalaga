import { useEffect, useState } from "react"
import OffersTableView from "./OffersTableView"

export default function OffersTable() {

    const [offersList, setOffersList] = useState(null)

    useEffect(function () {
        async function getOffersList() {
            try {
                const response = await fetch(`http://localhost:3006/offers/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setOffersList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getOffersList()
    },
        [setOffersList]
    )


    return (
        <OffersTableView offersList={offersList} />
    )
}