import { useAuthContext } from '../../context/AuthContext';

export default function LoginFormikView() {

    const { loginMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    setTimeout(() => {
        loginMessage
    }, 4000)


    // const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

    return (

        <>

            <div>
                Este es el formulario de login
            </div>


        </>
    )

}