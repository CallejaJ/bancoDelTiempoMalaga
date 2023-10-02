import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from "react";
import { Step, StepContent, StepLabel, Stepper, createTheme } from '@mui/material';

import { responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const steps = [
    {
        label: '¿Puedo cambiar mis datos?',
        description: `Sí, en el panel de usuario puedes cambiar tu nombre, apellidos, dirección y contraseña.`,
    },
    {
        label: '¿Puedo solicitar una tarea si no tengo créditos?',
        description:
            'Si, hasta un máximo de -20 créditos. Ten en cuenta que por registrarte en la aplicación te regalamos un crédito.'
    },
    {
        label: '¿Quién puede ver mis demandas?',
        description: `Al aceptar las condiciones generales del banco del tiempo  
        tus demandas estarán disponibles para todos los visitantes de la aplicación web.`,
    },
    {
        label: '¿Cómo contactan conmigo?',
        description: `A través del hilo de mensajes de la información detallada de cada oferta o demanda solicitada, se acuerda fecha y hora, tiempo convenido y lugar. 
        En ningún caso en la demanda se facilitará información confidencial como teléfono o dirección.`,
    },
    {
        label: '¿Cómo transfiero mis créditos?',
        description: `Los créditos se miden en horas, y los transfiere el usuario que recibe el servicio. 
        Un gestor del banco del tiempo comprobará que el registro se ha realizado correctamente.`,
    },

    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo A través del teléfono del Banco del Tiempo de tu distrito atención al usuario.`,
    },
];

export default function StepperDataPanel() {
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
        <>
            <Box
            marginTop={4}
            marginBottom={4}
            marginLeft={6}
            sx={{ maxWidth: 600 }}>
                <ThemeProvider theme={theme}>
                    <Typography
                        mb={2}
                        variant="h5"
                        sx={{ color: "orangered" }}
                    >¿Necesitas ayuda?
                    </Typography>
                </ThemeProvider>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption"></Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
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
                    <Typography>¡Perfecto! Has terminado el tour.</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
        </Box>
        </>
    );
}