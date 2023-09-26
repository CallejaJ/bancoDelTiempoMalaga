import { useEffect, useState } from "react";
import { RequestsFormikSchema } from "./RequestsFormikSchema";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { initialValuesRequest } from "./UI/requestsForm";
import RequestTrackingView from "./RequestTrackingView";




export default function RequestTracking() {

    const [userRequest, setuserRequest] = useState(null)
    const { id } = useParams();


    async function onSubmit(values) {
        try {
            const response = await fetch(`http://localhost:3006/requests/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
            if (response.ok) {
                console.log("Tu solicitud se ha enviado.")
            } else {
                console.log("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
    }



    useEffect(function () {
        async function getRequest() {
            try {
                const response = await fetch(`http://localhost:3006/requests/${id}`)
                if (response.ok) {
                    setuserRequest(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getRequest()
    },
        [id, setuserRequest]
    )

    const [servicesList, setServicesList] = useState([]);

    useEffect(function () {
        async function getServicesList() {
            try {
                const response = await fetch(`http://localhost:3006/services`)
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

    const [usersList, setUsersList] = useState([]);

    useEffect(function () {
        async function getUsersList() {
            try {
                const response = await fetch(`http://localhost:3006/user`)
                if (response.ok) {
                    setUsersList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getUsersList()
    },
        [setUsersList]
    )





    return (
        <Formik
            initialValues={userRequest ?? initialValuesRequest}
            enableReinitialize={true}
            validationSchema={RequestsFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <RequestTrackingView
                formik={props}
                users={usersList}
                services={servicesList} />}
        </Formik>
    )
}
