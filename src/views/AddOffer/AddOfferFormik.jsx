// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddOffer } from "./utils/newOfferForm";
import AddOfferFormikView from "./AddOfferFormikView";
import { AddOfferFormSchema } from "./AddOfferFormSchema";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";


export default function AddOfferFormik() {

    // useeffect endpoint getservices
    // lo guardo en un estado y se lo paso al formik en options

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




    const { addOffer } = useAuthContext()


    function onSubmit(values, actions) {
        console.log("onsubmit")
        addOffer(values);
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={initialValuesAddOffer}
            enableReinitialize={true}
            validationSchema={AddOfferFormSchema}
            onSubmit={onSubmit}
        >
            {(props) => <AddOfferFormikView formik={props} services={servicesList} />}
        </Formik>
    )
}
