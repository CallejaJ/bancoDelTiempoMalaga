import * as yup from "yup";

export const UltimateOfferSchema = yup.object().shape({

    service_recipient: yup
        .number()
        .oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], "Usuario no válido")
        .required("Requerido"),

    credits: yup
        .number()
        .min(1, "Escribe el tiempo utilizado en la tarea: 1 crédito = 1 hora")
        .required("Requerido")
});