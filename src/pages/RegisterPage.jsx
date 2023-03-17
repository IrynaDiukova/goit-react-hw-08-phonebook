import React from 'react';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

export const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <Box component='div' sx={{ mt: 30 }}>
        <RegisterForm />
      </Box>
    </>
  );
};

