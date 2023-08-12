

export const selectUserLoading = state => {
  return state.auth.isLoading;
};
export const selectUserError = state => {
  return state.auth.error;
};
export const selectToken = state => {
  return state.auth.token;
};
 export const selectAuthorization = state => {
  return state.auth.authorization;
};
 export const selectUserData = state => {
  return state.auth.userData;
};