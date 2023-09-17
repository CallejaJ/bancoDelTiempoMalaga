// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddOffer } from "./utils/newOfferForm";
import AddOfferFormikView from "./AddOfferFormikView";
import { AddOfferFormSchema } from "./AddOfferFormSchema";
import { useAuthContext } from "../../context/AuthContext";


export default function AddOfferFormik() {

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
            {(props) => <AddOfferFormikView formik={props} />}
        </Formik>
    )
}
