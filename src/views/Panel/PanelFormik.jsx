import { Formik } from "formik"
import PanelFormikView from "../Panel/PanelFormikView";
import { PanelFormikSchema } from "../Panel/PanelFormikSchema";
import { initialValues } from "./utils/panelForm";
import { useUserContext } from "../../context/UserContext";

export default function PanelFormik() {
    const { getUser } = useUserContext();

    function onSubmit() {
        // register(values);
        // actions.resetForm();
    }

    const user = getUser()
    console.log(user);

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