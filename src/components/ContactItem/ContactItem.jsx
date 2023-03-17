import { Box, IconButton, ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
      <ListItem
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        divider
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          component="span"
        >
          <PersonIcon />
          {name}: {number}
        </Box>
        <IconButton
          size="small"
          aria-label="delete"
          onClick={() => dispatch(deleteContact(id))}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
