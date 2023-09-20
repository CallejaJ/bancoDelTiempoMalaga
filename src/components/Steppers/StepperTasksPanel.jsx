import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from "react";
import { Step, StepContent, StepLabel, Stepper } from '@mui/material';

const steps = [
    {
        label: '¿Puedo cambiar mis ofertas?',
        description: `Sí, haz click en el botón para modificar la tarea a realizar y los créditos o tiempo que puede requerir la tarea.`,
    },
    {
        label: '¿Puedo cambiar mis demandas?',
        description:
            'Sí, haz click en el botón para modificar la tarea a realizar y los créditos o tiempo que puede requerir la tarea.'
    },
    {
        label: '¿Puedo eliminar mis ofertas?',
        description: `¡Claro que si! Pinchando en el botón se eliminará la oferta seleccionada.`,
    },
    {
        label: '¿Puedo eliminar mis demandas?',
        description: `¡Claro que si! Pinchando el botón se eliminará la demanda seleccionada.`,
    },

    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo A través del buzón de mensajería interna atención al usuario.`,
    },
];

export default function StepperTasksPanel() {
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
            marginTop={4}
            marginBottom={4}
            marginLeft={6}
            sx={{ maxWidth: 600 }}>
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
    );
}