import * as yup from "yup";

export const AddOfferFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(10, "El título debe tener al menos 10 caracteres.")
    .max(30, "El título debe tener menos de 30 caracteres.")
    .required("Requerido"),
  description: yup
    .string()
    .min(30, "La descripción debe tener al menos 30 caracteres.")
    .max(60, "La descripción debe tener menos de 60 caracteres.")
    .required("Requerido"),
  services_id: yup
    .number()
    .oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "Oferta no válida")
    .required("Requerido"),
  credits: yup
    .number()
    .typeError('Un número del 1 al 10')
    .min(1, "Escribe el tiempo necesario para la tarea: 1 crédito = 1 hora")
    .required("Requerido"),
  acceptedTC: yup
    .boolean()
    .oneOf([true], "Por favor, acepta los términos y condiciones del BDT."),
});
