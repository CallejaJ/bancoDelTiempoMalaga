import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from "react";
import { Step, StepContent, StepLabel, Stepper } from '@mui/material';

const steps = [
    {
        label: '¿Qué puedo solicitar?',
        description: `Si has acordado fecha y hora y has realizado el servicio acordado puedes solicitar tus créditos a través del botón azul. 
        Al solicitar tus créditos el usuario demandante recibirá un mensaje para validar tus créditos y que éstos añadirán a tu saldo.`,
    },
    {
        label: '¿Puedo modificar el tiempo ofrecido?',
        description:
            'Claro que si, es muy importante que en el campo de créditos solicitados aparezcan el número de horas de la tarea.',
    },
    {
        label: '¿Puedo eliminar mi oferta?',
        description: `En el caso de que haya cambiado tu disponibilidad puedes eliminar la oferta desde tu panel de usuario.`,
    },
    {
        label: '¿Qué hago si no recibo mis créditos?',
        description: `Ante cualquier incidencia puedes ponerte en contacto con 
        los gestores del banco del tiempo llamando al teléfono del Banco del Tiempo de tu distrito.`,
    },
];

export default function StepperTrackingOffer() {
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
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption"
                                        align={'justify'}
                                    ></Typography>
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
                    <Typography>Completa el formulario para solicitar tus créditos.</Typography>
                    <Button onClick={handleReset} sx={{ mt: 0, mr: 0 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
        </Box>
    );
}