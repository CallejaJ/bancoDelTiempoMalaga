import { useEffect, useState } from "react"
import OffersTableView from "./OffersTableView"

export default function OffersTable() {

    let [offersList, setOffersList] = useState([])

    useEffect(function () {
        async function getOffersList() {
            try {
                const response = await fetch(`http://localhost:3006/offers`)
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
        []
    )


    return (
        <OffersTableView offersList={offersList} />
    )
}