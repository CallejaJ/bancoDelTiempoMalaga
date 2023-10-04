import * as yup from "yup";

export const UltimateRequestSchema = yup.object().shape({

    holder_user_name: yup
        .number()
        .oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "Usuario no válido")
        .required("Requerido"),

    credits: yup
        .number()
        .typeError('Un número del 1 al 10')
        .min(0.5, "Escribe el tiempo necesario para la tarea: 1 crédito = 1 hora")
        .required("Requerido"),
});