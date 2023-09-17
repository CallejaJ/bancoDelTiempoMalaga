// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddRequest } from "./utils/newRequestForm";
import AddRequestFormikView from "./AddRequestFormikView";
import { AddRequestFormSchema } from "./AddRequestFormSchema";
import { useAuthContext } from "../../context/AuthContext";


export default function AddRequestFormik() {


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
            {(props) => <AddRequestFormikView formik={props} />}
        </Formik>
    )
}
