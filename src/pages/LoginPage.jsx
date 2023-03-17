import React from 'react';
import { Box } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Box component="div" sx={{ mt: 30 }}>
        <LoginForm />
      </Box>
    </>
  );
};
