import { useEffect, useState } from "react"
import RequestsTableView from "./RequestsTableView"

export default function RequestsTable() {

    let [requestsList, setRequestsList] = useState([])

    useEffect(function () {
        async function getRequestsList() {
            try {
                const response = await fetch(`http://localhost:3006/requests`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setRequestsList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getRequestsList()
    },
        []
    )


    return (
        <RequestsTableView requestsList={requestsList} />
    )
}