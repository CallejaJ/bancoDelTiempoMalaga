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
        label: '¿Qué puedo modificar?',
        description: `A continuación encontrarás los detalles de tu demanda. Puedes modificar
        los campos título, descripción y créditos. Es muy importante que los demás lo encuentren,
        para eso puedes añadir el tipo de servicio o categoría (acompañamiento, clases, taller, apoyo)  .`,
    },
    {
        label: '¿Puedo modificar el tiempo ofrecido?',
        description:
            'Claro que si, si han cambiado tus necesidades horarias puedes cambiar el número de horas de la tarea.',
    },
    {
        label: '¿Qué hago si nadie contacta conmigo?',
        description: `Puedes modificar el título para que sea más atractivo o los demás
        usuarios entiendan mejor lo que ofreces.`,
    },
    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo llamando al teléfono del Banco del Tiempo de tu distrito.`,
    },
];

export default function StepperModifyOffers() {
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
                        >¡Perfecto! Ya puedes modificar tus demandas.</Typography>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 0 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
            </ThemeProvider>
        </Box>
    );
}