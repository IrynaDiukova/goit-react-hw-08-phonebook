import React from 'react';
import { Appbar } from '../AppBar/Appbar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';


export const Layout = () => {
  return (
    <Container fixed>
      <Appbar />
      <Outlet />
    </Container>
  );
};


