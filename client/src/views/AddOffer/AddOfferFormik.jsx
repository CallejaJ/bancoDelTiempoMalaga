// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddOffer } from "./utils/newOfferForm";
import AddOfferFormikView from "./AddOfferFormikView";
import { AddOfferFormSchema } from "./AddOfferFormSchema";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddOfferFormik() {

    // useEffect endpoint a getservices
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




    const { addOffer, user } = useAuthContext()


    const navigate = useNavigate();
    function onSubmit(values, actions) {

        addOffer(values);
        actions.resetForm()
        if (user.role === 1) {
            setTimeout(() => {
                navigate('/adminpanel');
            }, 3000);
        } else {
            setTimeout(() => {
                navigate('/panel');
            }, 3000);
        }
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
