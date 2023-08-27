import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from "@emotion/react";
import React from "react";

const steps = [
    {
        label: '¿Qué puedo solicitar?',
        description: `Cualquier servicio que se traduzca en tiempo sabiendo que las horas
        de todas las personas que forman el banco valen lo mismo. Es importante explicar lo mejor 
        posible en qué consiste la tarea a realizar, para eso puedes añadir una etiqueta (acompañamiento, limpieza, reparaciones)`,
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
        description: `Ante cualquier incidencia puede ponerse en contacto con 
        los gestores del banco del tiempo a través del chat atención al usuario.`,
    },
];

export default function StepperRequests() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <>
            <Box
                sx={{
                    maxWidth: 800,
                    flexGrow: 1,
                    marginTop: 3,
                    marginBottom: 5
                }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        display: 'flex',
                        direction: 'row',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                </Paper>
                <Typography
                    align="justify" style={{ color: 'grey' }}
                >{steps[activeStep].label}</Typography>
                <Box
                    marginBottom={3}
                    sx={{
                        height: 255,
                        maxWidth: 400,
                        width: '100%',
                        p: 2
                    }}>
                    <Typography
                        align="justify" style={{ color: 'grey' }}
                    >{steps[activeStep].description}</Typography>

                </Box>
                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            style={{ color: 'grey' }}
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Siguiente
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            style={{ color: 'grey' }}
                            onClick={handleBack}
                            disabled={activeStep === 0}>

                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Atrás
                        </Button>
                    }
                />
            </Box>
        </>
    );
}

