import { useEffect, useState } from "react"
import RequestMessagesListView from "./RequestMessagesListView"
import { useAuthContext } from "../../../context/AuthContext"
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { newRequestMessageForm } from "./utils/newRequestMessageForm";
import { NewRequestMessageSchema } from "./NewRequestMessageSchema";

export default function RequestMessagesList() {

    const [newMessage, setNewMessage] = useState(null)
    let [messagesList, setMessagesList] = useState([])
    const { token } = useAuthContext();
    const { id } = useParams();

    useEffect(function () {
        async function getMessagesList() {
            try {
                const response = await fetch(`http://localhost:3006/messages/request/${id}`, {
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
        addMessage(values);
        actions.resetForm()
    }


    async function addMessage(values) {
        try {
            const response = await fetch(
                `http://localhost:3006/messages/request/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })

            if (response.ok) {
                const newRequestMessagesList = await response.json()
                setMessagesList(newRequestMessagesList)
                setNewMessage("¡Mensaje enviado!")
            }
            else {
                setNewMessage("¡Inténtalo de nuevo!")

            }
        }
        catch (err) {
            throw new Error(err)
        }
    }


    return (
        <Formik
            initialValues={newRequestMessageForm}
            enableReinitialize={true}
            validationSchema={NewRequestMessageSchema}
            onSubmit={onSubmit}
        >
            {(props) => <RequestMessagesListView formik={props} messagesList={messagesList} newMessage={newMessage} />}
        </Formik>

    )
}

