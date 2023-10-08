import TransferOrdersView from "./TransferOrdersView";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export default function TransferOrders() {

    const { user, token } = useAuthContext()

    const [userDetails, setUserDetails] = useState([])

    useEffect(function () {
        async function getUser() {
            try {
                const response = await fetch(
                    `http://localhost:3006/user/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
                if (response.ok) {
                    setUserDetails(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getUser()
    },
        [setUserDetails, token, user.id]
    )



    return (
        <TransferOrdersView userDetails={userDetails} setUserDetails={setUserDetails} />
    )
}