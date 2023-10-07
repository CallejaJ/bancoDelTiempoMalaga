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
        label: '¿Cómo puedo contactar con el usuario de la oferta?',
        description: `A traves del botón situado en la parte derecha de la oferta.`,
    },
    {
        label: '¿Cómo puedo conocer los detalles de la oferta?',
        description: 'Al hacer click en el icono azul de información podrás ver una nueva pantalla con una guía para incluir los mensajes que necesites para conocer más detalles de la oferta y del usuario ofertante.  ',
    },
    {
        label: '¿Cómo puedo ver si el usuario ofertante ha respondido a mis mensajes?',
        description: `En tu panel de usuario encontrarás tus ofertas y un icono con un sobre, es un enlace a una nueva pantalla donde puedes leer los mensajes recibidos de otros usuarios.`,
    },
    {
        label: '¿Qué hago si no contactan conmigo?',
        description: `Puedes solicitar más información llamando a los teléfonos de atención al usuario.`,
    },
    {
        label: '¿Puedo facilitar mi teléfono a otros usuarios?',
        description: `Es recomendable que todos los mensajes queden reflejados en la aplicación, para que, en caso de alguna incidencia, el equipo de gestores pueda conocer las conversaciones y detalles del proceso de intercambio.`,
    },

    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo llamando al teléfono del Banco del Tiempo de tu distrito.`,
    },
];

export default function StepperOfferInfo() {
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
            sx={{ maxWidth: 600 }}
            marginTop={4}
            marginBottom={4}
            padding={5}
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
                        >¡Perfecto! Ya puedes añadir una oferta.</Typography>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 0 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
            </ThemeProvider>
        </Box>
    );
}