import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { getNameFilter } from '../../redux/contacts/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getNameFilter);

   const getVisibleContacts = () => {
    const normalized = contactFilter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };
    return (
        <>
      <ul>
        {getVisibleContacts().map(({id, name, number}) => (
            <ContactItem 
            key={id}
            id={id}
            name={name}
            number={number}
        />))}
       </ul>
       </>
    )
    
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};


// import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { ContactItem } from '../ContactItem/ContactItem';
// import { getContacts } from '../../redux/contacts/contactsSlice';
// import { getNameFilter } from '../../redux/contacts/filterSlice';
// import { Container, Collapse } from '@mui/material';
// import { TransitionGroup } from 'react-transition-group';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const contactFilter = useSelector(getNameFilter);

//   const getVisibleContacts = () => {
//     const normalized = contactFilter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalized)
//     );
//   };

//   // Logic for checking is contact added/removed
//   const prevContacts = useRef(contacts);
//   useEffect(() => {
//     const isContactAdded = contacts.length > prevContacts.current.length;
//     const isContactRemoved = contacts.length < prevContacts.current.length;
//     if (isContactAdded) {
//       toast.success('Contact added!', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'light',
//       });
//     }
//     if (isContactRemoved) {
//       toast.success('Contact removed!', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'light',
//       });
//     }
//     prevContacts.current = contacts;
//   });

//   return (
//     <Container maxWidth="xs">
//       <ul>
//         <TransitionGroup>
//           {getVisibleContacts().map(({ id, name, number }) => (
//             <Collapse key={id} timeout={500}>
//               <ContactItem id={id} name={name} number={number} />
//             </Collapse>
//           ))}
//         </TransitionGroup>
//       </ul>
//       <ToastContainer />
//     </Container>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

