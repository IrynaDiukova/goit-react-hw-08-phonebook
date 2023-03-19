import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => state)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contact = [...state.contact, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => state)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = state.contact.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});


// Selectors
export const getContacts = (state) => state.contacts.contact;
export const getErrorMessage = (state) => state.contacts.error;
export const getLoadingState = (state) => state.contacts.isLoading;