import { useEffect, useState } from "react";
import { OffersFormikSchema } from "./OffersFormikSchema";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { initialValuesOffer } from "./UI/offersForm";
import OfferTrackingView from "./OfferTrackingView";




export default function OfferTracking() {

    const [userOffer, setUserOffer] = useState(null)
    const { id } = useParams();


    async function onSubmit(values) {
        try {
            const response = await fetch(`http://localhost:3006/offers/${id}`, {
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
            initialValues={userOffer ?? initialValuesOffer}
            enableReinitialize={true}
            validationSchema={OffersFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <OfferTrackingView
                formik={props}
                users={usersList}
                services={servicesList} />}
        </Formik>
    )
}
