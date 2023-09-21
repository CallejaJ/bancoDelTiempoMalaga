// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddRequest } from "./utils/newRequestForm";
import AddRequestFormikView from "./AddRequestFormikView";
import { AddRequestFormSchema } from "./AddRequestFormSchema";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";


export default function AddRequestFormik() {

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

    const { addRequest } = useAuthContext()


    function onSubmit(values, actions) {
        console.log("onsubmit")
        addRequest(values);
        actions.resetForm()
    }


    return (
        <Formik
            initialValues={initialValuesAddRequest}
            enableReinitialize={true}
            validationSchema={AddRequestFormSchema}
            onSubmit={onSubmit}
        >
            {(props) => <AddRequestFormikView formik={props} services={servicesList} />}
        </Formik>
    )
}
