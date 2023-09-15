import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from "react";
import { Step, StepContent, StepLabel, Stepper } from '@mui/material';

const steps = [
    {
        label: '¿Qué puedo solicitar?',
        description: `Cualquier tarea que se traduzca en tiempo sabiendo que las horas
        de todas las personas que forman el banco valen lo mismo. Es importante explicar lo mejor 
        posible en qué consiste la tarea a realizar, para eso puedes añadir una etiqueta (acompañamiento, limpieza, reparaciones)`,
    },
    {
        label: '¿Puedo solicitar una tarea si no tengo créditos?',
        description:
            'Si, hasta un máximo de -20 créditos. Ten en cuenta que por registrarte en la aplicación te regalamos un crédito.'
    },
    {
        label: '¿Quién puede ver mis demandas o solicitudes?',
        description: `Al aceptar las condiciones generales del banco del tiempo  
        tus demandas estarán disponibles para todos los visitantes de la aplicación web.`,
    },
    {
        label: '¿Cómo contactan conmigo?',
        description: `A través del chat, se acuerda fecha y hora, tiempo convenido y lugar. 
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
        los gestores del banco del tiempo a través del chat atención al usuario.`,
    },
];

export default function StepperRequests() {
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
            marginTop={4}
            marginBottom={4}
            padding={5}
        >
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