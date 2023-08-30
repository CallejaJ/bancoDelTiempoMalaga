import * as yup from "yup";

export const AddOfferFormSchema = yup.object().shape({
  description: yup
    .string()
    .min(20, "La descripción debe tener al menos 20 caracteres.")
    .required("Requerido"),
  service: yup
    .string()
    .oneOf(["caring", "children", "cleaning", "construction", "chinese", "english", "gardening", "maintenance", "maths"], "Oferta no válida")
    .required("Requerido"),
  acceptedTC: yup
    .boolean()
    .oneOf([true], "Por favor, acepta los términos y condiciones del BDT."),
});
