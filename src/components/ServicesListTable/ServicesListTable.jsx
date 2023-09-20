import { useEffect } from "react"
import ServicesListTableView from "./ServicesListTableView"
import { useAuthContext } from "../../context/AuthContext"

export default function ServicesListTable() {

    const { servicesList, setServicesList } = useAuthContext();

    useEffect(function () {
        async function getServicesList() {
            try {
                const response = await fetch(`http://localhost:3006/services`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",

                    },
                })
                if (response.ok) {
                    setServicesList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getServicesList()
    },
        [setServicesList]
    )


    return (
        <ServicesListTableView servicesList={servicesList} />
    )
}