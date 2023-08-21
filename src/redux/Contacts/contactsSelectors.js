import { createSelector } from '@reduxjs/toolkit';

export const selectUserContacts = state => {
  return state.contacts.contacts;
};
export const selectContactsLoading = state => {
  return state.contacts.isLoading;
};
export const selectContactsError = state => {
  return state.contacts.error;
};
export const filterForContacts = createSelector(
  [state => state.contacts.contacts, state => state.filte],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);