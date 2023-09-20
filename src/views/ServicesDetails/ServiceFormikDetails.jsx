import { useEffect, useState } from "react";
import { Formik } from "formik";
import { usePanelContext } from "../../context/PanelContext";
import { useParams } from "react-router-dom";
import { initialServiceValues } from "./UI/serviceForm";
import { ServiceFormikSchema } from "./ServiceFormikSchema";
import ServiceFormikDetailsView from "./ServiceFormikDetailsView";




export default function ServiceFormikDetails() {

    const [services, setServices] = useState(null)
    const { updateService, updateServiceMessage } = usePanelContext()
    const { id } = useParams();


    async function onSubmit(values) {
        try {
            const response = await fetch(`http://localhost:3006/services/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
            console.log(values);

            if (response.ok) {
                updateService(id) // le mando el id a la función del contexto
                updateServiceMessage("La categoría ha sido actualizada.")
            } else {
                updateServiceMessage("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
    }


    useEffect(function () {
        async function getServices() {
            try {
                const response = await fetch(`http://localhost:3006/services/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (response.ok) {
                    setServices(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getServices()
    },
        [id, setServices]
    )



    return (
        <Formik
            initialValues={services ?? initialServiceValues}
            enableReinitialize={true}
            validationSchema={ServiceFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <ServiceFormikDetailsView formik={props} />}
        </Formik>
    )
}
