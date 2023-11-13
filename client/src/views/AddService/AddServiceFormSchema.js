import * as yup from "yup";

export const AddServiceFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres.")
    .max(30, "La descripción debe tener menos de 30 caracteres.")
    .required("Requerido"),
});
