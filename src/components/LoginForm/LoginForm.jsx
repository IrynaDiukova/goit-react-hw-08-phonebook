import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn(
            {
                email: form.elements.email.value,
                password: form.elements.password.value,
            },
        ));
        form.reset();
    };

    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 400,
            mt: 5,
            ml: 'auto',
            mr: 'auto',
          }}
        >
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
          />
          <Button sx={{ width: 100, mt: 2 }} variant="outlined" type="submit">
            Log in
          </Button>
        </Box>
      </form>
    );
}