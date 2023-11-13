import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequestDetailsCardView from "./RequestDetailsCardView";

export default function RequestDetailsCard() {

    const [userRequest, setUserRequest] = useState([])
    const { id } = useParams();


    useEffect(function () {
        async function getRequest() {
            try {
                const response = await fetch(`http://localhost:3006/requests/${id}`)
                if (response.ok) {
                    setUserRequest(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getRequest()
    },
        [id, setUserRequest]
    )


    return <RequestDetailsCardView userRequest={userRequest} />

}