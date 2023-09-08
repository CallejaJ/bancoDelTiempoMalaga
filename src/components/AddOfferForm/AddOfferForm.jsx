import { Form, Formik } from "formik";
import { initialValues } from "../AddOfferForm/utils/form";
import { AddOfferFormSchema } from "../AddOfferForm/AddOfferFormSchema";
import Input from "../AddOfferForm/ui/Input";
import Select from "../AddOfferForm/ui/Select";
import Checkbox from "../AddOfferForm/ui/Checkbox";
import { Box, TextField } from "@mui/material";

async function onSubmit(actions) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}

export default function AddOfferForm() {
  return (

    <Formik
      initialValues={initialValues}
      validationSchema={AddOfferFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="fullWidth" id="fullWidth" />
          </Box>
        <Form>
          <Select
            label="Tipo de oferta"
            name="service"
            placeholder="Por favor, selecciona uno de los servicios a ofrecer:"
          >
            <option value="">Por favor, selecciona un servicio</option>
            <option value="caring">Cuidado de ancianos</option>
            <option value="children">Cuidado de niños</option>
            <option value="cleaning">Limpieza</option>
            <option value="construction">Reformas</option>
            <option value="chinese">Clases de idiomas: conversación</option>
            <option value="english">Clases de idiomas: gramática</option>
            <option value="gardening">Jardinería</option>
            <option value="maintenance">Mantenimiento y reparaciones</option>
            <option value="maths">Clases de matemáticas</option>
          </Select>
          <Input
            label="Descripción"
            name="description"
              placeholder="Explica en qué consiste tu oferta"
          />

          <Checkbox type="checkbox" name="acceptedTC" />
          <button disabled={isSubmitting} type="submit">
            Añadir oferta
          </button>
          <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
        </Form>
        </>
      )}
    </Formik>
  );
}
