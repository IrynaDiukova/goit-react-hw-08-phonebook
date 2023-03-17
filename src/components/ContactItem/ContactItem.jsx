import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import css from './ContactItem.module.css'

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
       
        <li> 
            <span className={css.contactText}> {name}:  {number} </span>
            <button className={css.contactBtn} onClick={() => dispatch(deleteContact(id))}> Delete </button>
        </li>)};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
