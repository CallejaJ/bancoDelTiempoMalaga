import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from "react";
import { Step, StepContent, StepLabel, Stepper, createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const steps = [
    {
        label: '¿Puedo enviar mensajes al usuario de la demanda?',
        description: `Claro que sí, pulsando el botón naranja, puedes enviar una 
        consulta al usuario de la oferta para conocer los detalles y acordar fecha y hora.
        Es muy importante que no facilites tus datos personales, puedes acordar un lugar de 
        encuentro para conocer al otro usuario y que todo quede reflejado en el hilo de mensajes.`,
    },
    {
        label: '¿Hay algún límite de mensajes?',
        description:
            'No hay límites de mensajes, puedes enviar todos los mensajes que necesites para conocer los detalles de la oferta y puedas proponer tus necesidades, horarios y disponibilidad.',
    },
    {
        label: '¿Quién puede ver mis mensajes?',
        description: `Todos los usuarios registrados pueden leer los mensajes en referencia a 
        ésta oferta. Es un hilo de mensajes abierto para facilitar a los usuarios interesados y al usuario
        ofertante que el servicio se realize lo antes posible.`,
    },
    {
        label: '¿Cómo contactan conmigo?',
        description: `A través del hilo de mensajes de la información detallada de cada oferta o demanda solicitada, se acuerda fecha y hora, tiempo convenido y lugar. 
        En ningún caso en la oferta se facilitará información confidencial como teléfono o dirección.`,
    },
    {
        label: '¿Cómo recibo mis créditos?',
        description: `Los créditos se miden en horas, y los transfiere el usuario que recibe el servicio. 
        Un gestor del banco del tiempo comprobará que el registro se ha realizado correctamente.`,
    },

    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo llamando al teléfono del Banco del Tiempo de tu distrito.`,
    },
];

export default function StepperSendMessage() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box
            sx={{ maxWidth: 500 }}
            marginTop={1}
            marginBottom={1}
        >
            <ThemeProvider theme={theme}>
                <Typography
                    mb={2}
                    variant="h5"
                    sx={{ color: "GrayText" }}
                >¿Necesitas ayuda?
                </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography
                                        variant="caption"
                                        align={'justify'}
                                        sx={{ color: "GrayText" }}
                                    ></Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography
                                sx={{ color: "GrayText" }}
                            >{step.description}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Anterior
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography
                            sx={{ color: "GrayText" }}
                        >¡Perfecto! Ya puedes enviar mensajes a otros usuarios.</Typography>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 0 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
            </ThemeProvider>
        </Box>
    );
}