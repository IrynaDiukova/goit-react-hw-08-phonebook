import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { SkeletonLoader } from 'components/SkeletonLoader/SkeletonLoader';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getLoadingState } from 'redux/contacts/contactsSlice';


export const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getLoadingState);

  return (
    <>
      <Helmet>
        <title>Contacts Page</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Typography variant="h4" component="p">
          Phonebook
        </Typography>
        <ContactForm />
        <Typography sx={{ mt: 4 }} variant="h5" component="p">
          Contacts
        </Typography>
        <Filter />
        {isLoading ? <SkeletonLoader /> : <ContactList />}
      </Box>
    </>
  );
};
