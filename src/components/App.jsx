import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm }from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/contactsOperations';
import { getErrorMessage, getLoadingState } from 'redux/contactsSlice';
import { Notifications } from './Notifications/Notifications';
import css from './App.module.css';
import { ColorRing } from 'react-loader-spinner';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getLoadingState);
  const errorMessage = useSelector(getErrorMessage);

      return (
        <div className={css.phoneContainer}>
        <h1 className={css.phoneTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.phoneTitle}>Contacts</h2>
        <Filter /> 
        {errorMessage && <Notifications />}
        {isLoading ? <ColorRing
          visible={true}
          height='80'
          width='80'
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks-wrapper'
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        /> : <ContactList />}
        </div>
      );
};


