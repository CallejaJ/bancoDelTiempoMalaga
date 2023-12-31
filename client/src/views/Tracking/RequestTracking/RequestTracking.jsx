import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { Formik } from "formik";
import { ultimateValuesRequest } from "./UI/ultimateRequestsForm";
import { UltimateRequestSchema } from "./UltimateRequestSchema";
import RequestTrackingView from "./RequestTrackingView";




export default function RequestTracking() {

    const { user, token } = useAuthContext();
    const { id } = useParams();
    const [userRequest, setUserRequest] = useState([])
    const [ultimateRequestMessage, setUltimateRequestMessage] = useState(null)

    setTimeout(() => {
        setUltimateRequestMessage(null)
    }, 3000)

    const navigate = useNavigate();

    async function onSubmit(values, actions) {
        console.log(values);
        try {
            const response = await fetch(`http://localhost:3006/credits/transfer`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })
            if (response.ok) {
                setUltimateRequestMessage("¡Transferencia realizada!")
                actions.resetForm()
                setTimeout(() => {
                    navigate('/panel/transferorders/');
                }, 3000);
            } else {
                setUltimateRequestMessage("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
    }



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

    const [usersList, setUsersList] = useState([]);

    useEffect(function () {
        async function getUsersList() {
            try {
                const response = await fetch(`http://localhost:3006/user`)
                if (response.ok) {
                    setUsersList(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getUsersList()
    },
        [setUsersList]
    )

    useEffect(function () {
        async function getRequest() {
            try {
                const response = await fetch(`http://localhost:3006/requests/${id}`)
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
            initialValues={ultimateValuesRequest}
            enableReinitialize={true}
            validationSchema={UltimateRequestSchema}
            onSubmit={onSubmit}
        >
            {(props) => <RequestTrackingView
                formik={props}
                users={usersList}
                services={servicesList}
                userRequest={userRequest}
                user={user}
                ultimateRequestMessage={ultimateRequestMessage}
            />}
        </Formik>
    )
}
