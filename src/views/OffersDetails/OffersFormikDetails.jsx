import { useEffect, useState } from "react";
import OffersFormikDetailsView from "./OffersFormikDetailsView";
import { OffersFormikSchema } from "./OffersFormikSchema";
import { Formik } from "formik";
import { usePanelContext } from "../../context/PanelContext";
import { useNavigate, useParams } from "react-router-dom";
import { initialValuesOffer } from "./UI/offersForm";




export default function OffersFormikDetails() {

    const [userOffer, setUserOffer] = useState(null)
    const { updateOffer } = usePanelContext()
    const { id } = useParams();
    const navigate = useNavigate();


    async function onSubmit(values) {
        try {
            const response = await fetch(`http://localhost:3006/offers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
            console.log(values);

            if (response.ok) {
                updateOffer(id) // le mando el id a la función del contexto
                setTimeout(() => {
                    navigate('/panel');
                }, 3000);
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
                const response = await fetch(`http://localhost:3006/offers/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
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




    return (
        <Formik
            initialValues={userOffer ?? initialValuesOffer}
            enableReinitialize={true}
            validationSchema={OffersFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <OffersFormikDetailsView formik={props} services={servicesList} />}
        </Formik>
    )
}
