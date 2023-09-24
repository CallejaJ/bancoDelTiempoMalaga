import * as yup from "yup";

export const ServiceFormikSchema = yup.object().shape({
    name: yup
        .string()
        .min(5, "Al menos 5 caracteres.")
        .max(20, "Menos de 20 caracteres.")
        .required("Requerido"),
});