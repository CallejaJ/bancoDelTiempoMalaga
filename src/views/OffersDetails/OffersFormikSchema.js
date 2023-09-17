import * as yup from "yup";

export const OffersFormikSchema = yup.object().shape({

    name: yup
        .string()
        .min(10, "Al menos 10 caracteres.")
        .required("Requerido"),

    description: yup
        .string()
        .min(10, "Al menos 10 caracteres.")
        .required("Requerido"),

    credits: yup
        .number()
        .min(1, "Escribe el tiempo necesario para la tarea: 1 crédito = 1 hora")
        .required("Requerido")
});