

export const selectUserContacts = state => {
  return state.contacts.contacts;
};
export const selectContactsLoading = state => {
  return state.contacts.isLoading;
};
export const selectContactsError = state => {
  return state.contacts.error;
};
