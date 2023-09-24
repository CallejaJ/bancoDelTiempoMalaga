import { useEffect, useState } from "react"
import OfferMessagesListView from "./OfferMessagesListView"
import { useAuthContext } from "../../../context/AuthContext"
import { useParams } from "react-router-dom";
import { newOfferMessageForm } from "./utils/newOfferMessageForm";
import { Formik } from "formik";
import { NewOfferMessageSchema } from "./newOfferMessageSchema";

export default function OfferMessagesList() {

    let [messagesList, setMessagesList] = useState([])
    const { token } = useAuthContext();
    const { id } = useParams();

    useEffect(function () {
        async function getMessagesList() {
            try {
                const response = await fetch(`http://localhost:3006/messages/offer/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })
                if (response.ok) {
                    setMessagesList(await response.json())
                    console.log(setMessagesList);
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getMessagesList()
    },
        [id, setMessagesList, token]
    )

    function onSubmit(values, actions) {
        console.log("onsubmit")
        addMessage(values);
        actions.resetForm()
    }


    async function addMessage(values) {
        try {
            const response = await fetch(
                `http://localhost:3006/messages/offer/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })

            if (response.ok) {
                const newOfferMessagesList = await response.json()
                setMessagesList(newOfferMessagesList)
                // setNewMessage("¡Mensaje enviado!")
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }


    return (
        <Formik
            initialValues={newOfferMessageForm}
            enableReinitialize={true}
            validationSchema={NewOfferMessageSchema}
            onSubmit={onSubmit}
        >
            {(props) => <OfferMessagesListView formik={props} messagesList={messagesList} />}
        </Formik>

    )
}

