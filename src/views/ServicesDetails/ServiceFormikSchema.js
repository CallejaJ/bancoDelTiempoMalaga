import * as yup from "yup";

export const ServiceFormikSchema = yup.object().shape({
    name: yup
        .string()
        .min(5, "Al menos 5 caracteres.")
        .max(25, "Menos de 25 caracteres.")
        .required("Requerido"),
});