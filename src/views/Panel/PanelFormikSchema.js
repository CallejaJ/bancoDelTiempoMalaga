import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const PanelFormikSchema = yup.object().shape({

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
        .max(11, "Un número del 1 al 11")
        .required("Requerido"),

    address: yup
        .string()
        .min(10, "Al menos 10 caracteres.")
        .required("Requerido"),

    pobox: yup
        .string()
        .min(5, "Al menos 5 digitos numéricos.")
        .required("Requerido"),

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

});