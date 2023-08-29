import { Box } from '@mui/material';
import { useState } from 'react';
import RequestForm from '../RequestForm/RequestForm';
import RequestList from '../RequestList/RequestList';
import { requestedServices } from '../../api/requestedServices';



export default function RequestDataTable() {

  const [services, setServices] = useState(requestedServices);
  const [newServiceTitle, setNewServiceTitle] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const newService = {
      userId: 1,
      id: new Date().getTime(),
      title: newServiceTitle,
      completed: false,
    };
    setServices((currentServices) => [newService, ...currentServices]);
    setNewServiceTitle("");
  }
  return (
    <Box

      style={{
        minHeight: '100vh',
        width: '100%'
      }}

    >
      <RequestForm
        onSubmit={onSubmit}
        setState={setNewServiceTitle}
        state={newServiceTitle}
      />
      <RequestList services={services} setState={setServices} />
    </Box>
  );
}