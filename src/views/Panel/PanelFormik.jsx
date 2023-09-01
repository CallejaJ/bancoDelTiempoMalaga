import { Formik } from "formik"
import PanelFormikView from "../Panel/PanelFormikView";
import { PanelFormikSchema } from "../Panel/PanelFormikSchema";
import { initialValues } from "./utils/panelForm";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function PanelFormik() {

    const [userProfile, setUserProfile] = useState(null)
    const { user, token } = useAuthContext()

    function onSubmit() {
        console.log("onsubmit, obteniendo datos")
        // putUser(values)
    }

    useEffect(function () {
        async function getProfile() {
            try {
                const response = await fetch(`http://localhost:3006/user/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                })
                if (response.ok) {
                    setUserProfile(await response.json())
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getProfile()
    },
        [user, token, setUserProfile]
    )



    return (
        <Formik
            initialValues={userProfile ?? initialValues}
            enableReinitialize={true}
            validationSchema={PanelFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <PanelFormikView formik={props} />}
        </Formik>
    );
}