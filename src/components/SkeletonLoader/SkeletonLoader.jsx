import React from 'react';
import { Skeleton, Box } from '@mui/material';


export const SkeletonLoader = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

