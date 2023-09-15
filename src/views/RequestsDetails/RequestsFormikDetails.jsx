import { useEffect, useState } from "react";
import { Formik } from "formik";
import { usePanelContext } from "../../context/PanelContext";
import { useParams } from "react-router-dom";
import { initialValuesRequest } from "./UI/requestsForm";
import { RequestFormikSchema } from "./RequestFormikSchema";
import RequestsFormikDetailsView from "./RequestsFormikDetailsView";




export default function RequestsFormikDetails() {

    const [userRequest, setUserRequest] = useState(null)
    const { updateRequest } = usePanelContext()
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
            console.log(values);

            if (response.ok) {
                updateRequest(id) // le mando el id a la función del contexto
                console.log("Tu demanda ha sido actualizada.")
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
                const response = await fetch(`http://localhost:3006/requests/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
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



    return (
        <Formik
            initialValues={userRequest ?? initialValuesRequest}
            enableReinitialize={true}
            validationSchema={RequestFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <RequestsFormikDetailsView formik={props} />}
        </Formik>
    )
}
