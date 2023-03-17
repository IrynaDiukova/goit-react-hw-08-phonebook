import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/contacts/filterSlice';
import SearchIcon from '@mui/icons-material/Search';


export const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setNameFilter(e.target.value));
    };
    return (
      <TextField
        sx={{ mb: 2, mt: 1 }}
        name="filter"
        onChange={handleFilterChange}
        id="input-with-icon-textfield"
        label="Find Contacts"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    );
}



 