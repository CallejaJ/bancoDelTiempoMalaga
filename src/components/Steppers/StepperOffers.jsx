import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from "react";
import { Step, StepContent, StepLabel, Stepper } from '@mui/material';

const steps = [
    {
        label: '¿Qué puedo ofrecer?',
        description: `Antes de nada ten en cuenta que no tiene que parecerse necesariamente 
        a un anuncio de busco/ofrezco empleo. Precisamente es un sistema alternativo a la economía
         y éste es el lugar para ofrecer algo que
        nos apetezca aportar más allá de nuestra profesión. Es una habilidad, 
        algo que hago muy bien y es muy importante que los demás lo encuentren, 
        para eso puedes añadir una etiqueta (acompañamiento, limpieza, reparaciones)`,
    },
    {
        label: '¿Qué incluyo en la oferta?',
        description:
            'Añade un texto que describa lo que puedes ofrecer a los usuarios. No olvides incluir tu disponibilidad horaria. Es importante para los usuarios conocer cuantas horas puedes prestar el servicio.',
    },
    {
        label: '¿Quién puede ver mis ofertas?',
        description: `Al aceptar las condiciones generales del banco del tiempo  
        tus ofertas estarán disponibles para todos los visitantes de la aplicación web.`,
    },
    {
        label: '¿Cómo contactan conmigo?',
        description: `A través del chat, se acuerda fecha y hora, tiempo convenido y lugar. 
        En ningún caso en la oferta se facilitará información confidencial como teléfono o dirección.`,
    },
    {
        label: '¿Cómo recibo mis créditos?',
        description: `Los créditos se miden en horas, y los transfiere el usuario que recibe el servicio. 
        Un gestor del banco del tiempo comprobará que el registro se ha realizado correctamente.`,
    },

    {
        label: '¿Qué hago si algo sale mal?',
        description: `Ante cualquier incidencia puede ponerse en contacto con 
        los gestores del banco del tiempo por el chat de atención al usuario.`,
    },
];

export default function StepperOffers() {
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
            alignItems={'center'}
            padding={5}
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
                    <Typography>¡Perfecto! Ya puedes crear una oferta.</Typography>
                    <Button onClick={handleReset} sx={{ mt: 0, mr: 0 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
        </Box>
    );
}