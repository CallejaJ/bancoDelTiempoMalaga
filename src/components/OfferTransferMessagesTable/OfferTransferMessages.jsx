import { useEffect, useState } from "react"
import OfferTransferMessagesView from "./OfferTransferMessagesView"
import { useAuthContext } from "../../context/AuthContext"

export default function OfferTransferMessages() {
    const { token } = useAuthContext()
    const [offerTransferMessagesList, setOfferTransferMessagesList] = useState([])

    useEffect(function () {
        async function getOfferTransferMessages() {
            try {
                const response = await fetch("http://localhost:3006/transfers/offer", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
                if (response.ok) {
                    setOfferTransferMessagesList(await response.json())
                    console.log(setOfferTransferMessagesList);
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getOfferTransferMessages()
    },
        [setOfferTransferMessagesList, token]
    )


    return (
        <OfferTransferMessagesView offerTransferMessagesList={offerTransferMessagesList} />
    )
}