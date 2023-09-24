import * as yup from "yup";

export const NewOfferMessageSchema = yup.object().shape({
    message: yup
        .string()
        .min(10, "La descripción debe tener al menos 10 caracteres.")
        .max(40, "La descripción debe tener menos de 40 caracteres.")
        .required("Requerido"),
});