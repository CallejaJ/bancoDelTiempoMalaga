import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { initialServiceValues } from "./UI/serviceForm";
import { ServiceFormikSchema } from "./ServiceFormikSchema";
import ServiceFormikDetailsView from "./ServiceFormikDetailsView";
import { useAuthContext } from "../../context/AuthContext";




export default function ServiceFormikDetails() {

    const { token, setUpdateServiceMessage } = useAuthContext()
    const { id } = useParams();
    let [servicesList, setServicesList] = useState([])


    async function onSubmit(values) {
        try {
            const response = await fetch(`http://localhost:3006/services/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })

            if (response.ok) {
                setUpdateServiceMessage("¡Categoría actualizada!.")
            } else {
                setUpdateServiceMessage("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
    }


    useEffect(function () {
        async function getServices() {
            try {
                const response = await fetch(`http://localhost:3006/services/${id}`)
                if (response.ok) {
                    setServicesList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getServices()
    },
        [id, setServicesList]
    )



    return (
        <Formik
            initialValues={servicesList ?? initialServiceValues}
            enableReinitialize={true}
            validationSchema={ServiceFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <ServiceFormikDetailsView formik={props}
            //  services={servicesList}
            />}
        </Formik>
    )
}
