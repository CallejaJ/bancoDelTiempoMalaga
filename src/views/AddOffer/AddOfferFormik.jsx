// import { useEffect, useState } from "react";
import { Formik } from "formik";
import { initialValuesAddOffer } from "./utils/newOfferForm";
import AddOfferFormikView from "./AddOfferFormikView";
import { AddOfferFormSchema } from "./AddOfferFormSchema";
import { useAuthContext } from "../../context/AuthContext";


export default function AddOfferFormik() {

    // const { id } = useParams();
    // const [newOffer, setNewOffer] = useState(null)
    const { addOffer } = useAuthContext()


    function onSubmit(values) {
        console.log("onsubmit")
        addOffer(values);
    }



// useEffect(function () {
//     async function getNewOffer() {
//         try {
//             const response = await fetch(`http://localhost:3006/offers/${id}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             })
//             if (response.ok) {
//                 setNewOffer(await response.json())
//             }
//         }
//         catch (err) {
//             throw new Error(err)
//         }
//     }
//     getNewOffer()
// },
//     [id]
// )





    return (
        <Formik
            initialValues={
                // newOffer ?? 
                initialValuesAddOffer}
            enableReinitialize={true}
            validationSchema={AddOfferFormSchema}
            onSubmit={onSubmit}
        >
            {(props) => <AddOfferFormikView formik={props} />}
        </Formik>
    )
}
