import * as yup from "yup";

export const RequestFormikSchema = yup.object().shape({

    name: yup
        .string()
        .min(10, "Al menos 3 caracteres.")
        .required("Requerido"),

    description: yup
        .string()
        .min(10, "Al menos 3 caracteres.")
        .required("Requerido"),

    credits: yup
        .number()
        .min(1, "Escribe el tiempo necesario para la tarea: 1 crédito = 1 hora")
        .typeError('Un número del 1 al 10')
        .required("Requerido")
});