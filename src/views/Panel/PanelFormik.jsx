import { Formik } from "formik"
import PanelFormikView from "../Panel/PanelFormikView";
import { PanelFormikSchema } from "../Panel/PanelFormikSchema";
import { initialValues } from "./utils/panelForm";
import { useUserContext } from "../../context/UserContext";

export default function PanelFormik() {
    const { getUser, putUser } = useUserContext();

    function onSubmit(values) {
        putUser(values)
    }

    const user = getUser()

    return (
        <Formik
            initialValues={user.id ? user : initialValues}
            enableReinitialize={true}
            validationSchema={PanelFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <PanelFormikView formik={props} />}
        </Formik>
    );
}