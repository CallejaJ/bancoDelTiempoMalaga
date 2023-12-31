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
        label: '¿Puedo transferir mis créditos?',
        description: `Si has acordado fecha y hora y has recibido el servicio acordado puedes transferir tus créditos a través del botón azul. 
        Al transferir tus créditos el usuario ofertante que te ha realizado el servicio recibirá los créditos y se descontarán de tu saldo.`,
    },
    {
        label: '¿Puedo modificar el tiempo ofrecido?',
        description:
            'Claro que si, es muy importante que en el campo de créditos transferidos aparezca el número de horas de la tarea.',
    },
    {
        label: '¿Puedo eliminar mi demanda?',
        description: `En el caso de que hayan cambiado tus necesidades puedes eliminar la demanda desde tu panel de usuario.`,
    },
    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo llamando al teléfono del Banco del Tiempo de tu distrito.`,
    },
];

export default function StepperTrackingRequest() {
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
            sx={{ maxWidth: 700 }}
            marginTop={5}
            marginBottom={4}
            padding={6}
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
                        >Completa el formulario para transferir tus créditos.</Typography>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 0 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
            </ThemeProvider>
        </Box>
    );
}