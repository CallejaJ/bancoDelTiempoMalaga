import * as yup from "yup";

export const ServiceFormikSchema = yup.object().shape({

    name: yup
        .string()
        .min(10, "Al menos 10 caracteres.")
        .max(20, "Menos de 20 caracteres.")
        .required("Requerido"),
});