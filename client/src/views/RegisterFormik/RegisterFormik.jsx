import { Formik } from "formik"
import RegisterFormikView from "../RegisterFormik/RegisterFormikView";
import { RegisterFormikSchema } from "../RegisterFormik/RegisterFormikSchema";
import { initialValues } from "./utils/registerForm";
import { useAuthContext } from "../../context/AuthContext";

export default function RegisterFormik() {
    const { register } = useAuthContext();

    function onSubmit(values, actions) {
        register(values);
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <RegisterFormikView formik={props} />}
        </Formik>
    );
}