import { useEffect, useState } from "react"
import CreditMessagesTableView from "./CreditsMessagesTableView"
import { useParams } from "react-router-dom"

export default function CreditMessagesTable() {

    const { creditMessagesList, setCreditMessagesList } = useState([])
    const { id } = useParams()

    useEffect(function () {
        async function getCreditMessagesList() {
            try {
                const response = await fetch(`http://localhost:3006/transfers/offer${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setCreditMessagesList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getCreditMessagesList()
    },
        [setCreditMessagesList, id]
    )


    return (
        <CreditMessagesTableView creditMessagesList={creditMessagesList} />
    )
}