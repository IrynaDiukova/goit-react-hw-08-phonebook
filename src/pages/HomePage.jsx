import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';

import BackGroundImg from '../images/phonoteka.png';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Contact book</title>
      </Helmet>
      <Box
        sx={{
          backgroundImage: `url(${BackGroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      ></Box>
    </>
  );
};
