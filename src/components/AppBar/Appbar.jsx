import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/userMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Appbar = () => {

  const { isLoggedIn } = useAuth();

    return (
        <header>
            <Box sx={{ mb: 8 }}>
                <AppBar position='fixed'>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Navigation />
                        </Box>
                        {isLoggedIn ? <UserMenu /> : <AuthNav />}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};