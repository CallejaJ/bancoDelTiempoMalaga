import * as yup from "yup";

export const AddOfferFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres.")
    .required("Requerido"),
  description: yup
    .string()
    .min(20, "La descripción debe tener al menos 20 caracteres.")
    .required("Requerido"),
  services_id: yup
    .number()
    .oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "Oferta no válida")
    .required("Requerido"),
  credits: yup
    .number()
    .typeError('Un número del 1 al 10')
    .min(1, "Escriba el tiempo necesario para la tarea: 1 crédito = 1 hora")
    .required("Requerido"),
  acceptedTC: yup
    .boolean()
    .oneOf([true], "Por favor, acepta los términos y condiciones del BDT."),
});
