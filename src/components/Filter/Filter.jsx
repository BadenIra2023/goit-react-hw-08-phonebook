import React from 'react';
import css from './Filter.module.css';

import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice'; 

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={css.formfilter}>
        Find contacts by name
        <input className={css.filter} type="text"
          onChange={(event) => dispatch(filterContacts(event.target.value.toLowerCase())) }
          placeholder="Please enter a name to search"/>
      </label>
    </>
  );
};
