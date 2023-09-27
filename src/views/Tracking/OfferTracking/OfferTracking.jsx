import { useEffect, useState } from "react";
import { UltimateOfferSchema } from "./UltimateOfferSchema";
import { Formik } from "formik";
// import { useParams } from "react-router-dom";
import { ultimateOfferForm } from "./UI/ultimateOfferForm";
import OfferTrackingView from "./OfferTrackingView";




export default function OfferTracking() {

    // const [ultimateOffer, setUltimateOffer] = useState(null)
    // const { id } = useParams();


    // async function onSubmit(values) {
    //     try {
    //         const response = await fetch(`http://localhost:3006`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(values)
    //         })
    //         if (response.ok) {
    //             setUltimateOffer("Tu solicitud se ha enviado.")
    //         } else {
    //             setUltimateOffer("Inténtalo de nuevo.")
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
                // ultimateOffer ?? 
                ultimateOfferForm}
            enableReinitialize={true}
            validationSchema={UltimateOfferSchema}
            // onSubmit={onSubmit}
        >
            {(props) => <OfferTrackingView
                formik={props}
                users={usersList}
                services={servicesList} />}
        </Formik>
    )
}
