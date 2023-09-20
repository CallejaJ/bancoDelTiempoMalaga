import { Formik } from "formik"
import PanelAdminFormikView from "../PanelAdmin/PanelAdminFormikView";
import { initialAdminValues } from "../PanelAdmin/utils/panelAdminForm";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { PanelAdminFormikSchema } from "./PanelAdminFormikSchema";

export default function PanelAdminFormik() {

    const [userProfile, setUserProfile] = useState(null)
    const { user, token, refresh } = useAuthContext()


    async function onSubmit(values) {
        try {
            const response = await fetch(`http://localhost:3006/user/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })
            console.log(values);

            if (response.ok) {
                refresh()
                console.log("Tus datos han sido actualizados.")
            } else {
                console.log("Inténtalo de nuevo.")
            }
        }

        catch (err) {
            throw new Error(err)
        }
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
            initialValues={userProfile ?? initialAdminValues}
            enableReinitialize={true}
            validationSchema={PanelAdminFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <PanelAdminFormikView formik={props} />}
        </Formik>
    );
}