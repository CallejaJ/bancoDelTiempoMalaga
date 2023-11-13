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
        label: '¿Puedo eliminar las solicitudes?',
        description: `Si recibes una solicitud de otro usuario con una tarea que no ha sido realizada puedes eliminar la solicitud, también en el caso de que haya solicitus duplicadas.
        Si ya has realizado la transferencia de créditos al usuario ofertante y recibes una nueva solicitud de la misma oferta la puedes eliminar. `,
    },
    {
        label: '¿Cómo elimino una solicitud?',
        description:
            'Al final de la solicitud encontrarás un botón gris con un icono de una papelera. Al pulsar el botón se eliminará la solicitud.',
    },
    {
        label: '¿Cuantos créditos puedo transferir?',
        description: `Los que aparezcan en el campo de créditos de la solicitud, y son el número de horas que ha conllevado la realización del servicio o tarea.`,
    },
    {
        label: '¿Cómo transfiero mis créditos?',
        description:
            'Al final de la solicitud encontrarás un botón azul con un icono de verificación. Al pulsar el botón se descontarán los créditos de tu saldo.',
    },
    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo llamando al teléfono del Banco del Tiempo de tu distrito.`,
    },
];

export default function StepperTrackingOffers() {
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
            sx={{ maxWidth: 800 }}
            marginTop={2}
            marginBottom={3}
            padding={3}
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
                        >Si las solicitudes son correctas puedes transferir tus créditos.</Typography>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 0 }}>
                            Reiniciar
                        </Button>
                    </Paper>
                )}
            </ThemeProvider>
        </Box>
    );
}