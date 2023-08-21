import { useDispatch } from "react-redux";

import TextField from '@mui/material/TextField';

import { filterForContacts } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  function onFilterInput(e) {
    console.log(e.target.value)
    dispatch(filterForContacts(e.target.value));
  }

  return (
    <TextField
      size="small"
      id="outlined-basic"
      label="Search name..."
      onChange={onFilterInput}
      variant="outlined"
      sx={{
        background: 'white',
        borderRadius: '8px',
        marginTop: '5px',
      }}
    />
  );
};
