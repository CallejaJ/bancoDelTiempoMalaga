import { useEffect, useState } from "react";
import { UltimateRequestSchema } from "./UltimateRequestSchema";
import { Formik } from "formik";
// import { useParams } from "react-router-dom";
import { ultimateValuesRequest } from "./UI/ultimateRequestsForm";
import RequestTrackingView from "./RequestTrackingView";




export default function RequestTracking() {

    // const [ultimateRequest, setUltimateRequest] = useState(null)
    // const { id } = useParams();


    // async function onSubmit(values) {
    //     try {
    //         const response = await fetch(`http://localhost:3006/requests/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(values)
    //         })
    //         if (response.ok) {
    //             setUltimateRequest("Tu solicitud se ha enviado.")
    //         } else {
    //             setUltimateRequest("Inténtalo de nuevo.")
    //         }
    //     }

    //     catch (err) {
    //         throw new Error(err)
    //     }
    // }



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
            initialValues={
                // ultimateRequest ?? 
                ultimateValuesRequest}
            enableReinitialize={true}
            validationSchema={UltimateRequestSchema}
            // onSubmit={onSubmit}
        >
            {(props) => <RequestTrackingView
                formik={props}
                users={usersList}
                services={servicesList} />}
        </Formik>
    )
}
