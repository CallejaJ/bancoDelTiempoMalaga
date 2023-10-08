import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OfferDetailsCardView from "./OfferDetailsCardView";

export default function OfferDetailsCard() {

    const [userOffer, setUserOffer] = useState([])
    const { id } = useParams();


    useEffect(function () {
        async function getOffer() {
            try {
                const response = await fetch(`http://localhost:3006/offers/${id}`)
                if (response.ok) {
                    setUserOffer(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getOffer()
    },
        [id, setUserOffer]
    )


    return <OfferDetailsCardView userOffer={userOffer} />

}