// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddService } from "./utils/newServiceForm";
import AddServiceFormikView from "./AddServiceFormikView";
import { AddServiceFormSchema } from "./AddServiceFormSchema";
import { useAuthContext } from "../../context/AuthContext";


export default function AddServiceFormik() {


    const { addService } = useAuthContext()


    function onSubmit(values, actions) {
        addService(values);
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={initialValuesAddService}
            enableReinitialize={true}
            validationSchema={AddServiceFormSchema}
            onSubmit={onSubmit}
        >
            {(props) => <AddServiceFormikView formik={props} />}
        </Formik>
    )
}
