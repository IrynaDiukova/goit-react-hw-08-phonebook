import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
import { Typography, Box, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="p" component="p">
        Welcome, {user.email}
      </Typography>
      <IconButton
        size="large"
        aria-label="logout button"
        onClick={handleLogOut}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
