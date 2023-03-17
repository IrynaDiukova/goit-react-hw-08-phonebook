import React from 'react';
import { Button } from '@mui/material';
import { NavItem } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <Button color='inherit'>
                <NavItem to='/'>HOME</NavItem>
            </Button>
            {isLoggedIn && <Button color='inherit'>
            <NavItem to='/contacts'>CONTACTS</NavItem>
            </Button>}
        </div>
    );
};