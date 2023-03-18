import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { TextField, Button, Box, FormHelperText } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 400,
          mt: 5,
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          size="small"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          size="small"
          name="email"
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          size="small"
          name="password"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Password must be at least 7 characters length
        </FormHelperText>
        <Button sx={{ width: 100, mt: 2 }} variant="outlined" type="submit">
          Register
        </Button>
      </Box>
    </form>
  );
};
