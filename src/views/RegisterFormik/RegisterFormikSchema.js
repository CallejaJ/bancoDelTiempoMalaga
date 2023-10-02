import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const RegisterFormikSchema = yup.object().shape({

    name: yup
        .string()
        .min(3, "Al menos 3 caracteres.")
        .required("Requerido"),

    surname: yup
        .string()
        .min(3, "Al menos 3 caracteres.")
        .required("Requerido"),

    district: yup
        .number()
        .min(1, "Escriba el código en números de su distrito.")
        .required("Requerido"),

    address: yup
        .string()
        .min(10, "Al menos 10 caracteres.")
        .required("Requerido"),

    pobox: yup
        .number()
        .min(5, "Al menos 5 digitos numéricos.")
        .typeError('Cinco digitos numéricos que empiecen por 29')
        .required("Requerido"),

    newEmail: yup.string().email("Por favor, escriba un email válido").required("Requerido"),

    password: yup
        .string()
        .matches(passwordRules, {
            message:
                "Al menos 5 caracteres, 1 mayúscula, 1 minúscula, 1 dígito numérico",
        })
        .required("Requerido"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
        .required("Requerido"),

    acceptedTC: yup
        .boolean()
        .oneOf([true], "Por favor, acepta los términos y condiciones."),
});